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

export const forceHiPSMinOrder = (hips: HiPS, minOrder: number): HiPS => {
  // Aladin overwrites the `minOrder` construction option with the value parsed
  // from the survey's properties file, falling back to 0 when the file omits
  // hips_order_min. Injecting the key into the properties before they are
  // parsed is the only way to make a user-supplied minimum order stick.
  const parseProperties = hips._parseProperties.bind(hips);
  hips._parseProperties = (properties = {}) =>
    parseProperties({ hips_order_min: minOrder, ...properties });

  return hips;
};

// One full notch of a discrete mouse wheel, in deltaY units, for pixel-based
// (DOM_DELTA_PIXEL) and line-based (Firefox) wheel events respectively.
const WHEEL_NOTCH_PIXELS = 120;
const WHEEL_NOTCH_LINES = 3;
// Field of view multiplier for one full notch; matches Aladin's native step.
const ZOOM_PER_NOTCH = 2;
// A pause this long between wheel events ends the current zoom gesture.
const GESTURE_RESET_MS = 200;

export const tameWheelZoom = (aladin: Aladin) => {
  const { view } = aladin;
  let deltaMode: number = WheelEvent.DOM_DELTA_PIXEL;
  let target: number | null = null;
  let lastEventTime = -Infinity;

  view.catalogCanvas.addEventListener(
    "wheel",
    (event) => {
      deltaMode = event.deltaMode;
    },
    { capture: true }
  );

  // Aladin's wheel handler only creates this callback when it does not already
  // exist, and its own version applies a fixed 2x zoom per event regardless of
  // the event's delta. Trackpad pinches and scrolls arrive as dozens of
  // small-delta wheel events per second, which compounds into an unusably fast
  // zoom. Supplying the callback up front scales the step with the reported
  // delta instead, so the total zoom is proportional to the gesture: a full
  // mouse-wheel notch still zooms 2x, while a trackpad pinch zooms by
  // 2^(distance / notch). The step is accumulated into a running target
  // rather than applied to the current field of view, because each call
  // restarts Aladin's 100 ms zoom animation and the current field of view
  // lags far behind during a rapid event stream.
  view.throttledTouchPadZoom = () => {
    const now = performance.now();
    if (target === null || now - lastEventTime > GESTURE_RESET_MS) {
      target = view.fov;
    }
    lastEventTime = now;

    const notch =
      deltaMode === WheelEvent.DOM_DELTA_PIXEL
        ? WHEEL_NOTCH_PIXELS
        : WHEEL_NOTCH_LINES;
    const strength = Math.min(Math.abs(view.delta) / notch, 1);
    const factor = ZOOM_PER_NOTCH ** strength;

    target = view.delta > 0 ? target * factor : target / factor;
    // Track the limits the view itself enforces so an exhausted gesture does
    // not keep winding up a phantom zoom that must be unwound before the
    // direction reverses. The projection caps the field of view even when no
    // range has been configured, in which case maxFoV is unset.
    if (view.minFoV) {
      target = Math.max(target, view.minFoV);
    }
    target = Math.min(
      target,
      view.maxFoV || Infinity,
      view.projection?.fov ?? Infinity
    );

    view.zoom.apply({ stop: target, duration: 100 });
  };
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
  fov?: number;
  target: [number, number];
}) => {
  const params = new URLSearchParams({
    target: target.map((p) => p.toFixed(5)).join(" "),
  });

  if (fov) {
    params.set("fov", fov.toFixed(2));
  }

  return params;
};

export const currentViewAsParams = (aladin: Aladin) => {
  return viewAsParams({ fov: aladin.getFov()[0], target: aladin.getRaDec() });
};

export const frameMap: Record<CooFrame, "d" | "s"> = {
  ICRS: "s",
  ICRSd: "d",
  gal: "d",
  galactic: "d",
  j2000: "s",
  equatorial: "s",
};
