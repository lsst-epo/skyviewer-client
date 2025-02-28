"use client";
import { FC, useEffect } from "react";
import { useNextStep } from "nextstepjs";
import { hasCompletedTutorial, tourTutorialTitle } from "@/lib/tutorial";
import AladinOverlay from "@/components/primitives/AladinOverlay";
import Orientation from "@/components/molecules/ExplorerControls/Orientation";
import TourControls from "@/components/organisms/TourControls";
import styles from "./styles.module.css";
import { useSearchParams } from "next/navigation";
import { useTour } from "@/contexts/Tour";
import PoiDescription from "@/components/molecules/PoiDescription";
import ToggleImageLayer from "@/components/organisms/TourControls/ToggleImageLayer";

const TourPage: FC<{ title: string | null }> = ({ title }) => {
  const { isPending, currentPoi, position } = useTour();
  const { startNextStep } = useNextStep();
  const searchParams = useSearchParams();
  const poi = searchParams.get("poi");

  useEffect(() => {
    if (!poi && !hasCompletedTutorial()) {
      startNextStep(tourTutorialTitle);
    }
  }, []);

  return (
    <AladinOverlay space="0" className={styles.tourOverlay}>
      <ToggleImageLayer />
      <Orientation
        className={styles.orientation}
        size="var(--size-spacing-l)"
      />
      <PoiDescription
        className={styles.description}
        isOpen={!isPending && !!currentPoi}
        tourTitle={title}
        title={currentPoi?.object.title}
        description={currentPoi?.description}
        currentStep={position.current}
        totalSteps={position.total}
      />
      <TourControls className={styles.controls} />
    </AladinOverlay>
  );
};

TourPage.displayName = "Page.Tour";

export default TourPage;
