"use client";
import { ChangeEventHandler, FC, useCallback, useState } from "react";
import AladinOverlay from "@/components/atomic/AladinOverlay";
import { useAladin } from "@/contexts/Aladin";
import Sketch from "./sketch";

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
    // Calculate total weight from sum of all pixel brightnesses
    let totalWeight = pixelValues.reduce((sum, pixel) => {
      return sum + pixel[0] + pixel[1] + pixel[2];
    }, 0);
    // Ensure total weight is at least 1 to avoid division by zero
    totalWeight = Math.max(totalWeight, 1);
    const summed = pixelValues.reduce(
      (totals, current) => {
        const currentBrightness = current[0] + current[1] + current[2];
        totals[0] += current[0] * currentBrightness;
        totals[1] += current[1] * currentBrightness;
        totals[2] += current[2] * currentBrightness;
        return totals;
      },
      [0, 0, 0]
    );
    // Return the weighted average of the pixel values
    return summed.map((value) => {
      return Math.floor(value / totalWeight);
    });
  } catch {
    return undefined;
  }
};

const Listener: FC = () => {
  const [sampleSize, setSampleSize] = useState(2); // Set the sample grid size
  const [pixel, setPixel] = useState<[number, number, number]>([0, 0, 0]);

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
        setPixel(average as [number, number, number]);
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
      <Sketch pixelColor={pixel} />
    </AladinOverlay>
  );
};

Listener.displayName = "Organism.Listener";

export default Listener;
