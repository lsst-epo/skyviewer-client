/* eslint-disable prefer-const */
import gsap from "gsap";

type Position = { ra: number; dec: number };

const isNarrowScreen = () => window.matchMedia("(width < 1130px)").matches;

export const adjustPositionForScreen = ({
  aladin,
}: {
  aladin: AladinInstance;
}) => {
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
  aladin: AladinInstance;
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
  onComplete,
}: {
  start: Position;
  end: Position;
  duration: number;
  aladin: AladinInstance;
  onComplete?: () => void;
}) => {
  let obj = start;

  gsap.to(obj, {
    ...end,
    duration,
    ease: "power1.inOut",
    onUpdate: () => {
      aladin.gotoRaDec(obj.ra, obj.dec);
    },
    onComplete,
  });
};

export const panAndZoom = ({
  fov,
  position,
  duration,
  aladin,
  onComplete,
}: {
  fov: { start: number; end: number; middle: number };
  position: { start: Position; end: Position };
  aladin: AladinInstance;
  duration: number[];
  onComplete?: () => void;
}) => {
  let timeline = gsap.timeline({ onComplete });
  let zoom = { fov: fov.start };
  let target = position.start;

  timeline
    .to(zoom, {
      fov: fov.middle,
      duration: duration[0],
      onUpdate: () => aladin.setFov(zoom.fov),
      ease: "power1.inOut",
    })
    .to(target, {
      ...position.end,
      onUpdate: () => aladin.gotoRaDec(target.ra, target.dec),
      duration: duration[1],
      ease: "power1.inOut",
      delay: duration[0] * -0.5,
    })
    .to(zoom, {
      fov: fov.end,
      onUpdate: () => aladin.setFov(zoom.fov),
      duration: duration[2],
      ease: "power1.inOut",
      delay: duration[2] * -0.5,
    });
};

export const fadeLayer = ({
  hips,
  from,
  to,
}: {
  hips: ImageHiPS;
  from: number;
  to: number;
}) => {
  let obj = { opacity: from };

  gsap.to(obj, {
    opacity: to,
    duration: 0.75,
    onUpdate: () => {
      hips.setOpacity(obj.opacity);
    },
  });
};
