import { defaultCache } from "@serwist/next/worker";
import type {
  PrecacheEntry,
  RuntimeCaching,
  SerwistGlobalConfig,
} from "serwist";
import {
  CacheableResponsePlugin,
  CacheFirst,
  ExpirationPlugin,
  Serwist,
} from "serwist";

// This declares the value of `injectionPoint` to TypeScript.
// `injectionPoint` is the string that will be replaced by the
// actual precache manifest. By default, this string is set to
// `"self.__SW_MANIFEST"`.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

console.info({ defaultCache });

const ImageCache: RuntimeCaching = {
  matcher: ({ request, url }) => {
    if (request.destination === "image") {
      const { pathname } = url;
      const orders = [
        "Norder0",
        "Norder1",
        "Norder2",
        "Norder3",
        "Norder4",
        "Norder5",
      ];

      const included = orders.some((order) => pathname.includes(order));

      return included;
    }

    return false;
  },
  handler: new CacheFirst({
    cacheName: "tile-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxEntries: 300,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        maxAgeFrom: "last-used",
        purgeOnQuotaError: true,
      }),
    ],
  }),
};

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [ImageCache],
});

serwist.addEventListeners();
