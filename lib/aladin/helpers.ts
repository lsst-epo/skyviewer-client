import { AladinEvent, AladinInstance } from "@/types/aladin";

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
  return ValidAladinEvents.includes(maybeEvent as any);
};

export function getPixelPosition(
  aladin: AladinInstance,
  { ra, dec }: { ra: number; dec: number }
) {
  return Array.from(aladin.world2pix(ra, dec)).reverse();
}
