export const getMarkerShape = (shapeSource) => {
  const shapes = ["circle", "plus", "rhomb", "cross", "triangle", "square"];

  if (!shapeSource) return "square";

  if (shapes.indexOf(shapeSource) > -1) {
    return shapeSource;
  }

  const newShape = new Image();
  newShape.src = shapeSource;
  return newShape;
};

export const getSourceCatalogOptions = (iconPath, filterFunc) => {
  return { shape: getMarkerShape(iconPath), filter: filterFunc };
};
