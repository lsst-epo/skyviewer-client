import camelCase from "lodash/camelCase";

const ValidAladinCallbacks: Array<ListenerCallback> = [
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

const isAladinCallback = (
  maybeEvent: string
): maybeEvent is ListenerCallback => {
  return ValidAladinCallbacks.includes(maybeEvent as any);
};

export const bindAladinEvents = (
  aladin: Aladin,
  events: ReactAladinCallbacks & AdditionalAladinCallbacks
) => {
  Object.keys(events).forEach((eventKey) => {
    const callback = events[eventKey];
    const listenerCallback = camelCase(eventKey.slice(2));

    if (isAladinCallback(listenerCallback)) {
      aladin.on(listenerCallback, callback);
    }
  });
};

export function getPixelPosition(
  aladin: Aladin,
  { ra, dec }: { ra: number; dec: number }
) {
  return Array.from(aladin.world2pix(ra, dec)).reverse();
}

export const isAtLocation = (
  firstLocation: Array<number>,
  secondLocation: Array<number>,
  precision = 5
) => {
  return (
    firstLocation[0].toPrecision(precision) ===
      secondLocation[0].toPrecision(precision) &&
    firstLocation[1].toPrecision(precision) ===
      secondLocation[1].toPrecision(precision)
  );
};

export const viewAsParams = ({
  fov,
  target,
}: {
  fov: number;
  target: [number, number];
}) => {
  const params = new URLSearchParams({
    fov: fov.toFixed(2),
    target: target.map((p) => p.toFixed(5)).join(" "),
  });

  return params;
};

export const currentViewAsParams = (aladin: Aladin) => {
  return viewAsParams({ fov: aladin.getFov()[0], target: aladin.getRaDec() });
};
