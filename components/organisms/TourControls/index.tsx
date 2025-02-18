"use client";
import { FC } from "react";
import { useNextStep } from "nextstepjs";
import { useStep } from "@/lib/tutorial";
import ShareTour from "./Share";
import TourBack from "./Back";
import PauseTour from "./Pause";
import TourNext from "./Next";
import styles from "./styles.module.css";

interface TourControlsProps {
  poiLimit: number;
}

const TourControls: FC<TourControlsProps> = ({ poiLimit }) => {
  const { currentStep, currentTour } = useNextStep();
  const { id, active } = useStep(1);

  return (
    <>
      <nav className={styles.navigation}>
        <ShareTour />
        <div
          data-active-tutorial-step={active}
          className={styles.navigationButtons}
          id={id}
        >
          <TourBack />
          <PauseTour />
          <TourNext {...{ poiLimit }} />
        </div>
      </nav>
    </>
  );
};

TourControls.displayName = "Organism.TourControls";

export default TourControls;
