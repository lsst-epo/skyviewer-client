import { AladinEvent } from "@/types/aladin";

const ValidAladinEvents: Array<AladinEvent> = [
  "select",
  "objectsSelected",
  "objectClicked",
  "objectHovered",
  "objectHoveredStop",
  "footprintClicked",
  "footprintHovered",
  "positionChanged",
  "zoomChanged",
  "click",
  "rightClickMove",
  "mouseMove",
  "fullScreenToggled",
  "cooFrameChanged",
  "resizeChanged",
  "projectionChanged",
  "layerChanged",
];

export const isAladinEvent = (
  maybeEvent: string
): maybeEvent is AladinEvent => {
  return Object.hasOwn(ValidAladinEvents, maybeEvent);
};
