"use client";
import { FC } from "react";
import { useStep } from "@/lib/tutorial";
import ShareTour from "./Share";
import TourBack from "./Back";
import TourNext from "./Next";
import styles from "./styles.module.css";
import clsx from "clsx/lite";

const TourControls: FC<{ className?: string }> = ({ className }) => {
  const { id, active } = useStep(1);

  return (
    <nav className={clsx(styles.navigation, className)}>
      <ShareTour />
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
