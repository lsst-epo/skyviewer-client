import { HiPSImageFormat } from "@/types/aladin";

const imgFormat: HiPSImageFormat = "png";

const defaultSurveyView = {
  fovMin: 2,
  fovMax: 90,
  fov: 60,
  target: "267.0208333333 -24.7800000000",
  imgFormat,
};

export default defaultSurveyView;
