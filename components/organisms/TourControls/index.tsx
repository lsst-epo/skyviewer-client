"use client";
import { FC } from "react";
import { useNextStep } from "nextstepjs";
import { useStep } from "@/lib/tutorial";
import ShareTour from "./Share";
import TourBack from "./Back";
import PauseTour from "./Pause";
import TourNext from "./Next";
import styles from "./styles.module.css";
import clsx from "clsx";

const TourControls: FC<{ className?: string }> = ({ className }) => {
  const { currentStep, currentTour } = useNextStep();
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
        <PauseTour />
        <TourNext />
      </div>
    </nav>
  );
};

TourControls.displayName = "Organism.TourControls";

export default TourControls;
