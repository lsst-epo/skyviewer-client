"use client";
import { FC, useState, useCallback } from "react";
import styles from "./styles.module.css";

interface OrientedSliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const OrientedSlider: FC<OrientedSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  orientation = "horizontal",
  className,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;

      const sliderElement = e.currentTarget as HTMLElement;
      const rect = sliderElement.getBoundingClientRect();

      let newValue: number;
      if (orientation === "horizontal") {
        const percentage = (e.clientX - rect.left) / rect.width;
        newValue = min + (max - min) * Math.max(0, Math.min(1, percentage));
      } else {
        const percentage = 1 - (e.clientY - rect.top) / rect.height;
        newValue = min + (max - min) * Math.max(0, Math.min(1, percentage));
      }

      newValue = Math.round(newValue / step) * step;
      onChange(newValue);
    },
    [isDragging, min, max, step, onChange, orientation]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      handleMouseMove(e);
    },
    [handleMouseMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      className={`${styles.slider} ${styles[orientation]} ${className || ""}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      tabIndex={0}
    >
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={
            orientation === "horizontal"
              ? { width: `${percentage}%` }
              : { height: `${percentage}%` }
          }
        />
        <div
          className={styles.handle}
          style={
            orientation === "horizontal"
              ? { left: `${percentage}%` }
              : { bottom: `${percentage}%` }
          }
        />
      </div>
    </div>
  );
};

export default OrientedSlider;
