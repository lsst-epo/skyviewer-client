import { Catalog, RubinCatalog } from "@/services/api/catalogs/schema";

const CUSTOM_SHAPES: Record<RubinCatalog, string> = {
  star: "/shapes/star-icon.png",
  galaxy: "/shapes/galaxy-icon.png",
  nebula: "/shapes/nebula-icon.png",
  transient: "/shapes/transient-icon.png",
  goal: "/shapes/fun-goal-icon.png",
  landmark: "/shapes/landmark-icon.png",
};

export async function getMarkerShape(
  shapeSource: string
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const newShape = new Image();
    newShape.onload = () => resolve(newShape);
    newShape.onerror = reject;
    newShape.src = shapeSource;
  });
}

export async function addCat(A: Aladin, aladin: AladinInstance, cat: Catalog) {
  const { path: url, icon, title } = cat;
  const shape: HTMLImageElement | CatalogSourceShape = CUSTOM_SHAPES[title]
    ? await getMarkerShape(CUSTOM_SHAPES[title])
    : "square";

  const catalog = A.catalogHiPS(url, {
    url,
    name: title,
    shape,
    sourceSize: 30,
    onClick: undefined,
  });

  aladin.addCatalog(catalog);
}

export const addCats = (
  A: Aladin,
  aladin: AladinInstance,
  catalogs: Array<Catalog>
) => {
  catalogs.forEach((cat) => {
    addCat(A, aladin, cat);
  });
};
