# Catalog Schemas

Zod schemas and types for the catalog layers drawn in Aladin-lite. These cover the filterable object catalogs and the Tour highlights catalog.

## Catalog vs Catalog Title

### Background
The original implementation was meant to load HiPS catalogs that each held a single type of astronomical object (e.g. "star", "nebula", "galaxy"). Each catalog type would use a corresponding custom image as its marker, and the user would be able to turn catalogs on and off. That work was never wired into a user-facing feature, but most of the capability existed.

### Adding Highlight Markers to Tours (Oct 2026)
To highlight objects at Tour POI stops, we used this existing work as the starting point (we may also implement the original feature one day). The new feature added a custom marker image (`rubinCircle`, in `tourCatalog`). Each highlight marker picks its own shape in Craft through `markerShape`.

Aladin-lite's built-in marker shapes (`circle`, `square`, …) were tried and then dropped because they did not look very good in our apps UI. Markers now only use our custom images, so every valid shape has and needs an entry in `CUSTOM_SHAPES`.

### `title` has two roles
`catalog.title` is the name of the catalog and is used to identify its marker image, which is looked up in `CUSTOM_SHAPES`. For the filterable catalogs these are the same thing: a `"star"` catalog uses the star image.

The Tour highlights catalog isn't limited to one kind of object, so its `title` (`"rubinCircle"`) is used as a fallback shape for markers whose `markerShape` is missing or invalid. It does not actually describe what is in the catalog.

`markerShapeSchema` was implemented when Aladin-lite's built-in marker shapes were experimented with. It was originally a union of those built in shapes and the `rubinCatalog`. When the built in shapes were dropped it essentailly became a wrapper aroun the `rubinCatalog` but it was kept because it better describes how it is used _and_ allows them to diverge later if needed.
