"use client";

import { useReducedMotion } from "motion/react";
import { useCallback } from "react";
import { useAladin } from "@/contexts/Aladin";
import { pan, panAndZoom, zoom } from "@/lib/aladin/animation";

interface MovementProps {
  ra: number;
  dec: number;
  fov?: number;
  onComplete?: () => void;
}

const zoomTime = (start: number, end: number) => {
  return Math.min(Math.max(Math.abs(end - start), 0), 1);
};

const useAladinMove = () => {
  const reduceMotion = useReducedMotion();
  const { isLoading, aladin, A } = useAladin();

  const goToPosition = useCallback(
    ({ ra, dec, fov, onComplete }: MovementProps) => {
      if (!isLoading) {
        if (Number.isNaN(ra) || Number.isNaN(dec)) return;

        const { options } = aladin;
        const { fov: initialFov } = aladin.options;

        const targetFov = fov || initialFov;

        const [currentFov] = aladin.getFov();
        const currentPosition = aladin.getRaDec();

        const precision = 1;
        const current = A.coo(...currentPosition, precision);
        const destination = A.coo(ra, dec, precision);
        current.setFrame(options.cooFrame);
        destination.setFrame(options.cooFrame);

        const shouldMove = current.format("d") !== destination.format("d");
        const shouldZoom = targetFov !== currentFov;

        if (reduceMotion) {
          if (shouldMove) {
            aladin.gotoRaDec(ra, dec);
          }
          if (shouldZoom) {
            aladin.setFov(targetFov);
          }
          onComplete && onComplete();
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
                Math.max(targetFov, currentFov) +
                Math.abs(targetFov - currentFov) * 0.1;

              const zoomOutTime = zoomTime(middleFov, currentFov);
              const zoomInTime = zoomTime(targetFov, middleFov);

              panAndZoom({
                fov: {
                  start: currentFov,
                  middle: middleFov,
                  end: targetFov,
                },
                position: {
                  start: startPosition,
                  end: endPosition,
                },
                duration: [zoomOutTime, panTime, zoomInTime],
                aladin,
                onComplete,
              });
            } else {
              pan({
                duration: panTime,
                start: startPosition,
                end: endPosition,
                aladin,
                onComplete,
              });
            }

            return;
          }

          if (shouldZoom) {
            const zoomOutTime = zoomTime(currentFov, targetFov);

            zoom({
              start: currentFov,
              end: targetFov,
              duration: zoomOutTime,
              aladin,
              onComplete,
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
