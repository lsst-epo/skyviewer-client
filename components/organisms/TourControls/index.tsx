"use client";
import { FC } from "react";
import clsx from "clsx/lite";
import TourBack from "./Back";
import TourNext from "./Next";
import { useStep } from "@/lib/tutorial";
import styles from "./styles.module.css";

const TourControls: FC<{ className?: string }> = ({ className }) => {
  const { id, active } = useStep(1);

  return (
    <nav className={clsx(styles.navigation, className)}>
      <div
        data-active-tutorial-step={active}
        className={styles.navigationButtons}
        id={id}
      >
        <TourBack />
        <TourNext />
      </div>
    </nav>
  );
};

TourControls.displayName = "Organism.TourControls";

export default TourControls;
