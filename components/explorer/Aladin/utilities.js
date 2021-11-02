// const ALADIN_SHAPES = ["circle", "plus", "rhomb", "cross", "triangle", "square"];
const CUSTOM_SHAPES = {
  star: "/shapes/star-icon.png",
  galaxy: "/shapes/galaxy-icon.png",
  nebula: "/shapes/nebula-icon.png",
  transient: "/shapes/transient-icon.png",
  goal: "/shapes/fun-goal-icon.png",
  landmark: "/shapes/landmark-icon.png",
};

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

  if (CUSTOM_SHAPES[title]) {
    shape = await getMarkerShape(CUSTOM_SHAPES[title]).catch((e) => "square");
  }

  aladin.addCatalog(aladinGlobal.catalogHiPS(path, { name: title, shape }));
}

export const addCats = (aladinGlobal, aladin, catalogs) => {
  catalogs.forEach((cat) => {
    addCat(aladinGlobal, aladin, cat);
  });
};
