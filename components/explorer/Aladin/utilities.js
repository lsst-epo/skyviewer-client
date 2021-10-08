const SHAPES = ["circle", "plus", "rhomb", "cross", "triangle", "square"];

export async function getMarkerShape(shapeSource) {
  return new Promise((resolve, reject) => {
    const newShape = new Image();
    newShape.onload = () => resolve(newShape);
    newShape.onerror = reject;
    newShape.src = shapeSource;
  });
}

export async function addCat(aladinGlobal, aladin, cat) {
  const { path, icon, title } = cat;
  let shape = "square";

  if (SHAPES.indexOf(icon) < 0 && icon.length > 0) {
    shape = await getMarkerShape(icon[0].url).catch((e) => "square");
  }

  aladin.addCatalog(aladinGlobal.catalogHiPS(path, { name: title, shape }));
}

export const addCats = (aladinGlobal, aladin, catalogs) => {
  catalogs.forEach((cat) => {
    addCat(aladinGlobal, aladin, cat);
  });
};
