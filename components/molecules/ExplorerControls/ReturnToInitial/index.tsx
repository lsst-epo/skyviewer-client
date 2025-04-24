"use client";
import { FC } from "react";
import { useReducedMotion } from "motion/react";
import IconButton from "@/components/atomic/IconButton";
import { useAladin } from "@/contexts/Aladin";
import { panAndZoom } from "@/lib/aladin/animation";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { useTranslation } from "react-i18next";

const ReturnToInital: FC = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const { isLoading, aladin, A } = useAladin();

  const onClick = () => {
    if (!isLoading) {
      const { options } = aladin;
      const { fov: initialFov, target } = aladin.options;
      const initialPosition = target.split(" ").map(parseFloat);

      const [currentFov] = aladin.getFov();
      const currentPosition = aladin.getRaDec();

      const precision = 1;
      const current = A.coo(...currentPosition, precision);
      const initial = A.coo(initialPosition[0], initialPosition[1], precision);
      current.setFrame(options.cooFrame);
      initial.setFrame(options.cooFrame);

      if (current.format("d") !== initial.format("d")) {
        if (reduceMotion) {
          aladin.setFov(initialFov);
          aladin.gotoRaDec(initialPosition[0], initialPosition[1]);
        } else {
          const middleFov =
            Math.max(initialFov, currentFov) +
            Math.abs(initialFov - currentFov) * 0.1;

          const zoomOutTime = Math.min(
            Math.max(Math.abs(middleFov - currentFov), 0),
            1
          );
          const panTime = Math.min(current.distance(initial), 1.5);
          const zoomInTime = Math.min(
            Math.max(Math.abs(middleFov - initialFov), 0),
            1
          );

          panAndZoom({
            fov: {
              start: currentFov,
              middle: middleFov,
              end: initialFov,
            },
            position: {
              start: { ra: currentPosition[0], dec: currentPosition[1] },
              end: { ra: initialPosition[0], dec: initialPosition[1] },
            },
            duration: [zoomOutTime, panTime, zoomInTime],
            aladin,
          });
        }
      }
    }
  };

  return (
    <IconButton
      icon={<IconComposer icon="Pin" />}
      onClick={onClick}
      disabled={isLoading}
      text={t("controls.return_to_initial")}
    />
  );
};

ReturnToInital.displayName = "Molecule.ExplorerControl.ReturnToInitial";

export default ReturnToInital;
