"use client";
import { ChangeEventHandler, FC, useCallback, useState } from "react";
import ControlStack from "@/components/molecules/Controls/Stack";
import AladinOverlay from "@/components/primitives/AladinOverlay";
import { useAladin } from "@/contexts/Aladin";
import styles from "./styles.module.css";

const buildSample = ({
  start,
  size,
}: {
  start: [number, number];
  size: number;
}) => {
  if (size === 1) {
    return [start];
  }

  const cells: Array<[number, number]> = [];
  const half = Math.floor(size / 2);
  const xStart = start[0] - half;
  const yStart = start[1] - half;

  const xRange = Array.from(new Array(size), (x, i) => i + xStart);
  const yRange = Array.from(new Array(size), (x, i) => i + yStart);

  xRange.forEach((x) => {
    yRange.forEach((y) => {
      cells.push([x, y]);
    });
  });

  return cells;
};

const samplePixels = ({
  cells,
  layer,
}: {
  cells: Array<Array<number>>;
  layer: AladinImageLayer;
}) => {
  try {
    const pixelValues = cells.map((cell) => {
      return layer.readPixel(cell[0], cell[1]);
    });

    const summed = pixelValues.reduce(
      (totals, current) => {
        totals[0] += current[0];
        totals[1] += current[1];
        totals[2] += current[2];
        return totals;
      },
      [0, 0, 0]
    );
    const total = pixelValues.length;

    return summed.map((value) => {
      return Math.floor(value / total);
    });
  } catch {
    return undefined;
  }
};

const Listener: FC = () => {
  const [sampleSize, setSampleSize] = useState(1);
  const [pixel, setPixel] = useState<string>("rgb(0,0,0)");

  const { isLoading } = useAladin();

  const updateHex = useCallback(() => {
    if (aladin) {
      const size = aladin.getSize();
      const x = Math.floor(size[0] / 2);
      const y = Math.floor(size[1] / 2);

      const average = samplePixels({
        cells: buildSample({ size: sampleSize, start: [x, y] }),
        layer: aladin.getBaseImageLayer(),
      });

      if (average) {
        setPixel(`rgb(${average.join(",")})`);
      }
    }
  }, [sampleSize, isLoading]);

  const { aladin } = useAladin({
    callbacks: {
      onPositionChanged: updateHex,
      onZoomChanged: updateHex,
    },
  });

  const handleSampleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    let newValue = event.target.valueAsNumber;

    if (Number.isNaN(newValue)) {
      newValue = 1;
    } else if (newValue % 2 === 0) {
      newValue = newValue + 1;
    }

    if (newValue !== sampleSize) {
      setSampleSize(newValue);
      updateHex();
    }
  };

  return (
    <AladinOverlay>
      <div className={styles.reticle} style={{ width: sampleSize }} />
      <ControlStack
        centered={false}
        className={styles.stack}
        position="bottom right"
      >
        <div style={{ backgroundColor: pixel }} className={styles.pixelColor} />
        <pre>{pixel}</pre>
        <label>
          Sample size
          <input
            placeholder="Sample size"
            defaultValue={sampleSize}
            onChange={handleSampleChange}
            type="number"
            min={1}
            max={13}
            step={2}
          />
        </label>
      </ControlStack>
    </AladinOverlay>
  );
};

Listener.displayName = "Organism.Listener";

export default Listener;
