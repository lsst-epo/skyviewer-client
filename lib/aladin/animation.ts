/* eslint-disable prefer-const */
import gsap from "gsap";

type Position = { ra: number; dec: number };

const isNarrowScreen = () => window.matchMedia("(width < 1130px)").matches;

export const adjustPositionForScreen = ({ aladin }: { aladin: Aladin }) => {
  if (isNarrowScreen()) {
    const duration =
      parseFloat(
        window
          .getComputedStyle(document.body)
          .getPropertyValue("--time-transition-slow")
      ) || 0.4;

    const start = aladin.getRaDec();
    const [width, height] = aladin.getSize();
    const centerX = width / 2;
    const centerY = height * 0.75;

    const end = aladin.pix2world(centerX, centerY);

    pan({
      start: { ra: start[0], dec: start[1] },
      end: { ra: end[0], dec: end[1] },
      duration,
      aladin,
    });
  }
};

export const zoom = ({
  start,
  end,
  duration,
  aladin,
  onComplete,
}: {
  start: number;
  end: number;
  duration: number;
  aladin: Aladin;
  onComplete?: () => void;
}) => {
  let obj = { fov: start };

  gsap.to(obj, {
    fov: end,
    duration,
    ease: "power1.inOut",
    onUpdate: () => {
      aladin.setFov(obj.fov);
    },
    onComplete,
  });
};

export const pan = ({
  start,
  end,
  duration,
  aladin,
  ease = "power1.inOut",
  onComplete,
}: {
  start: Position;
  end: Position;
  duration: number;
  aladin: Aladin;
  ease?: GSAPTweenVars["ease"];
  onComplete?: () => void;
}) => {
  let obj = start;

  gsap.to(obj, {
    ...end,
    duration,
    ease,
    onUpdate: () => {
      aladin.gotoRaDec(obj.ra, obj.dec);
    },
    onComplete,
  });
};

const labels = {
  startZoomOut: "startZoomOut",
  startPan: "startPan",
  startZoomIn: "startZoomIn",
};

const addLayerChange = ({
  timeline,
  layers: [outLayer, inLayer],
  duration,
}: {
  timeline: GSAPTimeline;
  layers: Array<AladinImageLayer | undefined>;
  duration: number;
}) => {
  let outOpacity = { opacity: 1 };
  let inOpacity = { opacity: 0 };

  if (outLayer) {
    timeline.to(
      outOpacity,
      {
        opacity: 0,
        onUpdate: () => outLayer.setOpacity(outOpacity.opacity),
        duration,
        ease: "power1.inOut",
      },
      labels.startZoomOut
    );
  }

  if (inLayer) {
    timeline.to(
      inOpacity,
      {
        opacity: 1,
        onUpdate: () => inLayer.setOpacity(inOpacity.opacity),
        duration,
        ease: "power1.inOut",
      },
      labels.startZoomOut
    );
  }
};

export const panAndZoom = ({
  fov,
  position,
  duration: [zoomOutTime, panTime, zoomInTime],
  layers,
  aladin,
  onComplete,
}: {
  fov: { start: number; end: number; middle: number };
  position: { start: Position; end: Position };
  layers?: Array<AladinImageLayer | undefined>;
  aladin: Aladin;
  duration: number[];
  onComplete?: () => void;
}) => {
  let timeline = gsap.timeline({ onComplete });
  let zoom = { fov: fov.start };
  let target = position.start;

  timeline.addLabel(labels.startZoomOut, 0);
  timeline.addLabel(labels.startPan, zoomOutTime * 0.5);
  timeline.addLabel(labels.startZoomIn, zoomOutTime * 0.5 + panTime);

  const total = zoomOutTime * 0.5 + panTime + zoomInTime * 0.5;

  if (layers) {
    addLayerChange({
      timeline,
      layers,
      duration: total,
    });
  }

  timeline.to(
    zoom,
    {
      fov: fov.middle,
      duration: zoomOutTime,
      onUpdate: () => aladin.setFov(zoom.fov),
      ease: "power1.inOut",
    },
    labels.startZoomOut
  );
  timeline.to(
    target,
    {
      ...position.end,
      onUpdate: () => aladin.gotoRaDec(target.ra, target.dec),
      duration: panTime,
      ease: "power1.inOut",
    },
    labels.startPan
  );
  timeline.to(
    zoom,
    {
      fov: fov.end,
      onUpdate: () => aladin.setFov(zoom.fov),
      duration: zoomInTime,
      ease: "power1.inOut",
    },
    labels.startZoomIn
  );
};
