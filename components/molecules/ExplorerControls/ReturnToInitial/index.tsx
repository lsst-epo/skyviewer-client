"use client";
import { FC } from "react";
import { useReducedMotion } from "motion/react";
import IconButton from "@/components/atomic/IconButton";
import { useAladin } from "@/contexts/Aladin";
import { pan, panAndZoom, zoom } from "@/lib/aladin/animation";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { useTranslation } from "react-i18next";

const zoomTime = (start: number, end: number) => {
  return Math.min(Math.max(Math.abs(end - start), 0), 1);
};

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

      const hasMoved = current.format("d") !== initial.format("d");
      const hasZoomed = initialFov !== currentFov;

      if (reduceMotion) {
        if (hasMoved) {
          aladin.gotoRaDec(initialPosition[0], initialPosition[1]);
        }
        if (hasZoomed) {
          aladin.setFov(initialFov);
        }

        return;
      }

      const startPosition = { ra: currentPosition[0], dec: currentPosition[1] };
      const endPosition = { ra: initialPosition[0], dec: initialPosition[1] };

      if (hasMoved) {
        const panTime = Math.min(current.distance(initial), 1);

        if (hasZoomed) {
          const middleFov =
            Math.max(initialFov, currentFov) +
            Math.abs(initialFov - currentFov) * 0.1;

          const zoomOutTime = zoomTime(middleFov, currentFov);
          const zoomInTime = zoomTime(initialFov, middleFov);

          panAndZoom({
            fov: {
              start: currentFov,
              middle: middleFov,
              end: initialFov,
            },
            position: {
              start: startPosition,
              end: endPosition,
            },
            duration: [zoomOutTime, panTime, zoomInTime],
            aladin,
          });
        } else {
          pan({
            duration: panTime,
            start: startPosition,
            end: endPosition,
            aladin,
          });
        }

        return;
      }

      if (hasZoomed) {
        const zoomOutTime = zoomTime(currentFov, initialFov);

        zoom({
          start: currentFov,
          end: initialFov,
          duration: zoomOutTime,
          aladin,
        });
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
