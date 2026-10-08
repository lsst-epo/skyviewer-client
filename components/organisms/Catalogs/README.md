# Catalogs

Adds Aladin-lite catalog layers and draws their source markers using the custom
Rubin marker images in `public/shapes/`. The filterable catalogs and the Tour
highlights catalog share `addCat`, but they size their markers differently.

## Sky-scaled markers (`skyScaledShapeResolver`)

### Why markers are sized in degrees

Every Tour stop sets a fixed field of view in degrees. A narrower viewport shows
that same patch of sky with fewer pixels per degree, so a marker of fixed pixel
size grows relative to the sky and stops lining up with the object it's
highlighting. This is very obvious on mobile widths. Sizing highlight markers in
degrees keeps them on their objects at any viewport width.

Using the scaling function is opt-in through the catalog's `scaleWithSky` flag.

### The per-frame shape function is barely documented

Aladin accepts three kinds of `shape`: a built-in shape name or an image, a
function called **once per source** that returns an image or shape name, and a
function called **on every frame** as `(source, ctx, viewParams)`, which draws
straight onto the canvas.

The API reference only describes the first two. The third appears only in
Aladin's examples ([al-cat-custom-draw-function.html](https://github.com/cds-astro/aladin-lite/blob/master/examples/al-cat-custom-draw-function.html))
and in `src/js/Catalog.js`. Our `CatalogSourceShapeFn` type in
`types/aladin.d.ts` is written from those two sources, not from published
types. **After upgrading `aladin-lite`, check that the highlight markers still
render.**

### Gotchas

- **Aladin chooses the mode by counting parameters (`fn.length > 1`).** Keep
  the returned function's three parameters plain. Default values, `...rest`,
  or a wrapper that changes the function's arity (for example some
  memoize/debounce helpers) make Aladin quietly treat it as a once-per-source
  function, and markers fall back to Aladin's built-in square.
- **A marker is only drawn while its center is on the canvas.** A large ring disappears
  as soon as its center pans out of view, even if most of the ring would still be visible.
- **`markerSizeFactor` means something different in each resolver.** In `shapeResolver`
  it multiplies `BASE_MARKER_SIZE` (pixels).
  In `skyScaledShapeResolver` it multiplies `BASE_MARKER_SIZE_DEG` (degrees). Values entered in Craft only make sense for the catalog they're used with.
- When using `skyScaledShapeResolver` the Aladin-lite redraws every marker on every frame.
  This render cost is fine for a few highlights per stop, like in a tour POI, but not for a large HiPS catalog.
