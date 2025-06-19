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

  const calculateValue = useCallback(
    (clientX: number, clientY: number, rect: DOMRect) => {
      let newValue: number;
      if (orientation === "horizontal") {
        const percentage = (clientX - rect.left) / rect.width;
        newValue = min + (max - min) * Math.max(0, Math.min(1, percentage));
      } else {
        const percentage = 1 - (clientY - rect.top) / rect.height;
        newValue = min + (max - min) * Math.max(0, Math.min(1, percentage));
      }

      newValue = Math.round(newValue / step) * step;
      return newValue;
    },
    [min, max, step, orientation]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;

      const sliderElement = e.currentTarget as HTMLElement;
      const rect = sliderElement.getBoundingClientRect();
      const newValue = calculateValue(e.clientX, e.clientY, rect);
      onChange(newValue);
    },
    [isDragging, calculateValue, onChange]
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

  // Touch event handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      setIsDragging(true);
      const touch = e.touches[0];
      const sliderElement = e.currentTarget as HTMLElement;
      const rect = sliderElement.getBoundingClientRect();
      const newValue = calculateValue(touch.clientX, touch.clientY, rect);
      onChange(newValue);
    },
    [calculateValue, onChange]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const touch = e.touches[0];
      const sliderElement = e.currentTarget as HTMLElement;
      const rect = sliderElement.getBoundingClientRect();
      const newValue = calculateValue(touch.clientX, touch.clientY, rect);
      onChange(newValue);
    },
    [isDragging, calculateValue, onChange]
  );

  const handleTouchEnd = useCallback(() => {
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
