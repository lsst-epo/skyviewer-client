import { AladinOptions, ImageHiPSOptions } from "@/types/aladin";

export const defaultHiPSOptions: ImageHiPSOptions = {
  cooFrame: "ICRS",
  maxOrder: 11,
};

export const defaultAladinOptions: AladinOptions = {
  cooFrame: "ICRS",
  showReticle: false,
  showZoomControl: false,
  showFullscreenControl: false,
  showLayersControl: false,
  showShareControl: false,
  showSimbadPointerControl: false,
  showFrame: false,
  showFov: false,
  showProjectionControl: false,
  showStatusBar: false,
  showCooLocation: false,
  showContextMenu: false,
  pixelateCanvas: false,
};

export default defaultAladinOptions;
