"use client";
import { FC, useEffect } from "react";
import { getTourPois } from "@/services/api/tours";
import { NextStep, useNextStep } from "nextstepjs";
import {
  hasCompletedTutorial,
  tourTutorialTitle,
  useStep,
} from "@/lib/tutorial";
import AladinOverlay from "@/components/primitives/AladinOverlay";
import Orientation from "@/components/molecules/ExplorerControls/Orientation";
import TourControls from "@/components/organisms/TourControls";
import styles from "./styles.module.css";
import { useSearchParams } from "next/navigation";

interface TourPageProps {
  pois: NonNullable<Awaited<ReturnType<typeof getTourPois>>>;
}

const TourPage: FC<TourPageProps> = ({ pois }) => {
  const { startNextStep } = useNextStep();
  const searchParams = useSearchParams();
  const poi = searchParams.get("poi");

  useEffect(() => {
    if (!poi && !hasCompletedTutorial()) {
      startNextStep(tourTutorialTitle);
    }
  }, []);

  return (
    <AladinOverlay
      space="var(--size-spacing-s) var(--size-spacing-s) var(--size-spacing-xl)"
      className={styles.tourOverlay}
    >
      <div className={styles.orientation}>
        <Orientation size="var(--size-spacing-l)" />
      </div>
      <TourControls poiLimit={pois.length} />
    </AladinOverlay>
  );
};

TourPage.displayName = "Page.Tour";

export default TourPage;
