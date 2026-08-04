// Cache-first service worker for HiPS tiles.
//
// The HiPS tile server responds with `cache-control: private, max-age=0`,
// which lets the browser store tiles but forces a conditional revalidation
// round trip (~300 ms per tile) before every reuse. Tiles at a given path are
// immutable in practice (new processings are published under new survey
// paths), so revalidating them buys nothing. This worker serves previously
// seen tiles straight from the browser's Cache Storage, skipping the round
// trip entirely.
//
// The `private` intent of the server is preserved: Cache Storage is part of
// the user's own browser profile, so no shared cache ever holds the data.
// Survey metadata (`properties`, `Moc.fits`) does not match the tile pattern
// and keeps its normal caching semantics.
// Requests for tiles that do not exist (the viewer probes the whole field of
// view, but tiles are only generated where there is sky coverage) get a 404
// that costs just as much latency as a real tile, so those are cached too.
// Unlike a real tile, a 404 could become a tile if a survey were ever
// re-uploaded in place, so negative entries expire.
const CACHE_NAME = "hips-tiles-v1";
const MAX_TILES = 2000;
const TRIM_EVERY_N_PUTS = 50;
const NEGATIVE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const CACHED_AT_HEADER = "sw-cached-at";
const TILE_URL = /\/Norder\d+\/(?:Dir\d+\/Npix\d+|Allsky)\.(?:webp|png|jpe?g)$/i;

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter((name) => name.startsWith("hips-tiles") && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
      await self.clients.claim();
    })()
  );
});

// Primed so that the first put after the worker starts always trims. The
// counter does not survive the worker being shut down between bursts of
// activity, so a cache that only ever grows a few tiles at a time would
// otherwise never reach the threshold and never be trimmed at all.
let putsSinceTrim = TRIM_EVERY_N_PUTS;

const trim = async (cache) => {
  // Cache keys come back in insertion order, so this drops the oldest tiles
  const keys = await cache.keys();
  const excess = keys.length - MAX_TILES;

  if (excess > 0) {
    await Promise.all(
      keys.slice(0, excess).map((request) => cache.delete(request))
    );
  }
};

const put = async (cache, request, response) => {
  try {
    await cache.put(request, response);

    putsSinceTrim += 1;
    if (putsSinceTrim >= TRIM_EVERY_N_PUTS) {
      putsSinceTrim = 0;
      await trim(cache);
    }
  } catch {
    // Storage is full or unavailable. Caching is only an optimization, so a
    // write that fails must not fail the request it was meant to speed up.
  }
};

const cacheFirst = async (request) => {
  // Reads are best effort too: storage can be disabled or cleared mid-session,
  // and a request that would have succeeded without this worker must still
  // succeed with it. Only the fetch below is allowed to fail.
  const cache = await caches.open(CACHE_NAME).catch(() => null);
  const cached = cache && (await cache.match(request).catch(() => null));

  if (cached) {
    if (cached.status !== 404) {
      return cached;
    }

    const cachedAt = Number(cached.headers.get(CACHED_AT_HEADER));
    if (Date.now() - cachedAt < NEGATIVE_TTL_MS) {
      return cached;
    }

    await cache.delete(request).catch(() => {});
  }

  const response = await fetch(request);

  if (!cache) {
    return response;
  }

  if (response.ok) {
    await put(cache, request, response.clone());
  } else if (
    response.status === 404 &&
    new URL(request.url).origin !== self.location.origin
  ) {
    // negative caching only pays for remote hosts; a same-origin miss is
    // nearly free and may exist on the next request (e.g. a local tile
    // mirror that is still being populated)
    await put(
      cache,
      request,
      new Response(null, {
        status: 404,
        statusText: "Not Found",
        headers: { [CACHED_AT_HEADER]: String(Date.now()) },
      })
    );
  }

  return response;
};

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (
    request.method === "GET" &&
    TILE_URL.test(new URL(request.url).pathname)
  ) {
    event.respondWith(cacheFirst(request));
  }
});
