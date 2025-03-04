const imgFormat: HiPSImageFormat = "png";
const cooFrame: CooFrame = "ICRS";
const tileSize: TileSize = 512;

const defaultSurveyView = {
  fovMin: 2,
  fovMax: 90,
  fov: 60,
  target: "267.0208333333 -24.7800000000",
  imgFormat,
  cooFrame,
  maxOrder: 11,
  tileSize,
};

export default defaultSurveyView;
