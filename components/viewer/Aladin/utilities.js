export const getMarkerShape = (shapeSource) => {
  const shapes = ["circle", "plus", "rhomb", "cross", "triangle", "square"];

  if (shapes.indexOf(shapeSource) > -1) {
    return shapeSource;
  }

  const newShape = new Image();
  newShape.src = shapeSource;
  return newShape;
};

export const getSourceCatalogOptions = (catOpts) => {
  const { shape, type } = catOpts;
  return { ...catOpts, shape: getMarkerShape(shape) };
};
