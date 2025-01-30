"use client";
import { FC, useCallback, useState } from "react";
import ViewIndicator from "@rubin-epo/epo-widget-lib/ViewIndicator";
import { useAladin } from "@/contexts/Aladin";

const Orientation: FC<{ className?: string }> = ({ className }) => {
  const [fov, setFov] = useState<[number, number] | undefined>();
  const [position, setPosition] = useState<[number, number] | undefined>();

  const onPositionChanged: AladinGenericCallback = useCallback(
    ({ ra, dec }) => {
      setPosition([ra, dec]);
    },
    []
  );

  const onZoomChanged: AladinGenericCallback = useCallback((newFov: number) => {
    const fov = (aladin?.getFov() || [newFov, newFov]).map((fov) =>
      Math.max(1, fov)
    );
    setFov(fov as [number, number]);
  }, []);

  const { aladin } = useAladin({
    callbacks: {
      onPositionChanged,
      onZoomChanged,
      onLoaded: (aladin) => {
        const position = aladin.getRaDec();
        const fov = aladin.getFov();

        setPosition(position);
        setFov(fov);
      },
    },
  });

  return (
    <ViewIndicator
      className={className}
      ra={position ? position[0] : undefined}
      dec={position ? position[1] : undefined}
      fov={fov}
      size="var(--size-spacing-l)"
    />
  );
};

Orientation.displayName = "Molecule.Orientation";

export default Orientation;
