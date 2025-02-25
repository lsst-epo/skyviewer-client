"use client";
import { FC, useCallback, useState } from "react";
import ViewIndicator from "@rubin-epo/epo-widget-lib/ViewIndicator";
import { useAladin } from "@/contexts/Aladin";
import { isAtLocation } from "@/lib/aladin/helpers";

const roundPosition = (position: [number, number]): [number, number] => {
  return [
    Number(position[0].toPrecision(3)),
    Number(position[1].toPrecision(3)),
  ];
};

const roundFov = (fov: [number, number]): [number, number] => {
  return [
    Math.max(1, parseInt(fov[0].toString())),
    Math.max(1, parseInt(fov[1].toString())),
  ];
};

const Orientation: FC<{ className?: string; size?: string }> = ({
  className,
  size = "var(--size-spacing-xl)",
}) => {
  const [fov, setFov] = useState<[number, number] | undefined>();
  const [position, setPosition] = useState<[number, number] | undefined>();

  const onPositionChanged: PositionChangedCallback = useCallback(
    ({ ra, dec }) => {
      const newPosition: [number, number] = roundPosition([ra, dec]);

      if (!position || !isAtLocation(position, newPosition, 3)) {
        setPosition(newPosition);
      }
    },
    [position]
  );

  const onZoomChanged: AladinGenericCallback = useCallback(
    (newFov: number) => {
      const newFovTwoDirections = roundFov(
        aladin?.getFov() || [newFov, newFov]
      );

      if (
        !fov ||
        (newFovTwoDirections[0] !== fov[0] && newFovTwoDirections[1] !== fov[1])
      ) {
        setFov(newFovTwoDirections as [number, number]);
      }
    },
    [fov]
  );

  const { aladin } = useAladin({
    callbacks: {
      onPositionChanged,
      onZoomChanged,
      onLoaded: ({ aladin }) => {
        setPosition(roundPosition(aladin.getRaDec()));
        setFov(roundFov(aladin.getFov()));
      },
    },
  });

  return (
    <ViewIndicator
      ra={position ? position[0] : undefined}
      dec={position ? position[1] : undefined}
      {...{ fov, size, className }}
    />
  );
};

Orientation.displayName = "Molecule.Orientation";

export default Orientation;
