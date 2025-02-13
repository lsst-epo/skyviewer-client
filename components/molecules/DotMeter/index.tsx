import clsx from "clsx";
import { FC } from "react";
import styles from "./styles.module.css";

interface DotMeterProps {
  min: number;
  max: number;
  value: number;
  text?: string;
  className?: string;
}

const DotMeter: FC<DotMeterProps> = ({ min, max, value, text, className }) => {
  const count = max - min + 1;
  const values: Array<boolean> = new Array(count)
    .fill(true)
    .fill(false, value, max);

  return (
    <div
      className={clsx(styles.meter, className)}
      role="meter"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-valuetext={text}
    >
      {values.map((value, i) => {
        return <div className={styles.value} key={i} data-filled={value} />;
      })}
    </div>
  );
};

DotMeter.displayName = "Molecule.DotMeter";

export default DotMeter;
