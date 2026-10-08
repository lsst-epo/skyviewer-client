import type { Catalog, RubinCatalog } from "@/services/api/catalogs/schema";

const CUSTOM_SHAPES: Record<RubinCatalog, string> = {
  star: "/shapes/star-icon.png",
  galaxy: "/shapes/galaxy-icon.png",
  nebula: "/shapes/nebula-icon.png",
  transient: "/shapes/transient-icon.png",
  goal: "/shapes/fun-goal-icon.png",
  landmark: "/shapes/landmark-icon.png",
  rubinCircle: "/shapes/rubin-circle-empty.png",
};

// Pixel size of a marker with markerSizeFactor = 1
const BASE_MARKER_SIZE = 30;
// Angular size of a marker with markerSizeFactor = 1
const BASE_MARKER_SIZE_DEG = 0.005;

export async function getMarkerShape(
  shapeSource: string,
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const newShape = new Image();
    newShape.onload = () => resolve(newShape);
    newShape.onerror = reject;
    newShape.src = shapeSource;
  });
}

let customShapeImages:
  | Promise<Record<RubinCatalog, HTMLImageElement>>
  | undefined;

/**
 * Pre-load the custom Rubin Shapes defined in CUSTOM_SHAPES.
 *
 * The function passed as the catalog's `shape` needs to resolve syncronously
 * and won't wait for the async getMarkerShape. If the shape is not available when the catalog
 * is added it wont be available when a source that uses it is added to the catalog and nothing
 * will be drawn to the canvas.
 *
 * @returns customShapeImages
 */
function loadCustomShapes() {
  if (!customShapeImages) {
    // Build the list of images to preload
    const shapes = Object.keys(CUSTOM_SHAPES) as Array<RubinCatalog>;
    const images = {} as Record<RubinCatalog, HTMLImageElement>;

    customShapeImages = Promise.all(
      shapes.map(async (shape) => {
        images[shape] = await getMarkerShape(CUSTOM_SHAPES[shape]);
      }),
    ).then(() => images);
  }

  return customShapeImages;
}

/**
 * Aladin ignores `sourceSize` for image `shapes` and uses them at their raw
 * size, so per-source sizing is done by handing Aladin a pre-scaled canvas of the image.
 */
function scaleImage(image: HTMLImageElement, factor: number) {
  const width = Math.max(1, Math.round(BASE_MARKER_SIZE * factor));
  const height = Math.max(1, Math.round((width * image.height) / image.width));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d")?.drawImage(image, 0, 0, width, height);

  return canvas;
}

// Aladin calls this once per source as it is added.
export function shapeResolver(
  images: Record<RubinCatalog, HTMLImageElement>,
  fallback: Catalog["title"],
): CatalogSourceShapeFactory {
  return (source) => {
    const shape: Catalog["title"] = source.data?.markerShape ?? fallback;

    return scaleImage(
      images[shape] ?? images[fallback],
      Number(source.data?.markerSizeFactor) || 1,
    );
  };
}

/**
 * Sizes markers in degrees instead of pixels so they stay locked to the sky
 * regardless of viewport size.
 * Aladin calls this function on every frame draw.
 */
export function skyScaledShapeResolver(
  images: Record<RubinCatalog, HTMLImageElement>,
  fallback: Catalog["title"],
): CatalogSourceShapeFn {
  return (source, renderingContext, viewParams) => {
    const shape: Catalog["title"] = source.data?.markerShape ?? fallback;
    const image = images[shape];
    const factor = Number(source.data?.markerSizeFactor) || 1;

    const pxPerDeg = viewParams.width / viewParams.fov[0];
    const width = BASE_MARKER_SIZE_DEG * factor * pxPerDeg;
    const height = (width * image.height) / image.width;

    renderingContext.drawImage(
      image,
      source.x - width / 2,
      source.y - height / 2,
      width,
      height,
    );
  };
}

export async function addCat(
  A: A,
  aladin: Aladin,
  cat: Catalog,
) {
  const { path: url, title, isHipsCatalog, scaleWithSky } = cat;
  const customShapes = await loadCustomShapes();
  const options = {
    name: title,
    shape: scaleWithSky
      ? skyScaledShapeResolver(customShapes, title)
      : shapeResolver(customShapes, title),
    onClick: undefined,
  };

  const catalog = isHipsCatalog
    ? A.catalogHiPS(url, { url, ...options })
    : A.catalog({ url: "", ...options });

  aladin.addCatalog(catalog);

  return catalog;
}

export const addCats = (A: A, aladin: Aladin, catalogs: Array<Catalog>) => {
  return Promise.all(
    catalogs.map((cat) => {
      return addCat(A, aladin, cat);
    }),
  );
};
