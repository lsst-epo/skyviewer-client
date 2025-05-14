"use client";

import { useAladin } from "@/contexts/Aladin";
import { pan, panAndZoom, zoom } from "@/lib/aladin/animation";
import { useReducedMotion } from "motion/react";
import { useCallback } from "react";

const zoomTime = (start: number, end: number) => {
  return Math.min(Math.max(Math.abs(end - start), 0), 1);
};

const useAladinMove = () => {
  const reduceMotion = useReducedMotion();
  const { isLoading, aladin, A } = useAladin();

  const goToPosition = useCallback(
    ({ ra, dec }: { ra: number; dec: number }) => {
      if (!isLoading) {
        if (Number.isNaN(ra) || Number.isNaN(dec)) return;

        const { options } = aladin;
        const { fov: initialFov } = aladin.options;

        const [currentFov] = aladin.getFov();
        const currentPosition = aladin.getRaDec();

        const precision = 1;
        const current = A.coo(...currentPosition, precision);
        const destination = A.coo(ra, dec, precision);
        current.setFrame(options.cooFrame);
        destination.setFrame(options.cooFrame);

        const shouldMove = current.format("d") !== destination.format("d");
        const shouldZoom = initialFov !== currentFov;

        if (reduceMotion) {
          if (shouldMove) {
            aladin.gotoRaDec(ra, dec);
          }
          if (shouldZoom) {
            aladin.setFov(initialFov);
          }
        } else {
          const startPosition = {
            ra: currentPosition[0],
            dec: currentPosition[1],
          };
          const endPosition = {
            ra,
            dec,
          };

          if (shouldMove) {
            const panTime = Math.min(current.distance(destination), 1);

            if (shouldZoom) {
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

          if (shouldZoom) {
            const zoomOutTime = zoomTime(currentFov, initialFov);

            zoom({
              start: currentFov,
              end: initialFov,
              duration: zoomOutTime,
              aladin,
            });
          }
        }
      }
    },
    [reduceMotion, aladin, isLoading, A]
  );

  return goToPosition;
};

export default useAladinMove;
