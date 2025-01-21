import { FunctionComponent } from "react";
import styles from "./styles.module.css";
import { useAladin } from "@/contexts/Aladin";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { getLinearScale } from "@/lib/utilities";
import classNames from "classnames";

const FOVSize: FunctionComponent<{ fov?: number; className?: string }> = ({
  fov,
  className,
}) => {
  const { ref } = useAladin();
  const frameSize = 200;
  const windowSize = ref.current?.clientWidth;
  const focalPlaneWidth = 200;
  const focalPlaneFov = 3.5;
  const moonFov = 0.5;
  const minFov = 0;
  const maxMoonFov = focalPlaneFov * 1.5;
  const minMoonFov = focalPlaneFov;

  if (!windowSize || !fov) return null;

  const frameFov = (fov / windowSize) * frameSize;
  const scaledFocalPlane = focalPlaneFov / frameFov;
  const scaledMoon = scaledFocalPlane / (focalPlaneFov / moonFov);

  const opacityFocalPlane = getLinearScale([minFov, focalPlaneFov], [0, 1], {
    clamp: true,
  });
  const opacityMoon = getLinearScale([maxMoonFov, minMoonFov], [0, 1], {
    clamp: true,
  });

  return (
    <div className={classNames(className, styles.fovLayout)}>
      <span>View size: {fov.toFixed(2)}°</span>
      {/* <svg
        width={frameSize}
        height={frameSize}
        viewBox={`0 0 ${frameSize} ${frameSize}`}
        className={styles.fovContainer}
      >
        <g
          transform={`scale(${scaledFocalPlane})`}
          opacity={opacityFocalPlane(frameFov)}
          className={styles.resizingObject}
        >
          <IconComposer icon="FocalPlane" size={focalPlaneWidth} />
          <text
            y="-15%"
            className={styles.centeredText}
            opacity={frameFov < focalPlaneFov * 2 ? 1 : 0}
          >
            <tspan x="100%">Rubin&apos;s</tspan>
            <tspan x="100%" dy="1em">
              Focal Plane
            </tspan>
            <tspan x="100%" dy="1em" textAnchor="middle">
              3.5°
            </tspan>
          </text>
        </g>
        <g
          transform={`scale(${scaledMoon})`}
          opacity={opacityMoon(frameFov)}
          className={styles.resizingObject}
        >
          <IconComposer icon="Moon" phase={0.5} size={focalPlaneWidth} />
          <text
            y="-5%"
            className={styles.centeredText}
            opacity={frameFov < moonFov * 3 ? 1 : 0}
          >
            <tspan x="95%" dy="0">
              Our Moon
            </tspan>
            <tspan x="95%" dy="1em" textAnchor="middle">
              0.5°
            </tspan>
          </text>
        </g>
      </svg> */}
    </div>
  );
};

FOVSize.displayName = "Molecule.FOVSize";

export default FOVSize;
