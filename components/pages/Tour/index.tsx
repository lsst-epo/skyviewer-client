"use client";
import { FC, useEffect, useState } from "react";
import { useNextStep } from "nextstepjs";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { assetTitle } from "@/lib/canto/metadata";
import { hasCompletedTutorial, tourTutorialTitle } from "@/lib/tutorial";
import AladinOverlay from "@/components/atomic/AladinOverlay";
import Orientation from "@/components/molecules/ExplorerControls/Orientation";
import TourControls from "@/components/organisms/TourControls";
import { useTour } from "@/contexts/Tour";
import PoiSlideout from "@/components/molecules/PoiSlideout";
import PoiHeader from "@/components/molecules/PoiHeader";
import AudioControls from "@/components/molecules/AudioControls";
import ViewScale from "@/components/molecules/ExplorerControls/ViewScale";
import ShareTour from "@/components/organisms/TourControls/Share";
import styles from "./styles.module.css";

const TourPage: FC<{ title: string | null }> = ({ title }) => {
  const {
    i18n: { language },
  } = useTranslation();
  const [openOverride, setOpenOverride] = useState(true);
  const { isPending, currentPoi, position } = useTour();
  const { startNextStep } = useNextStep();
  const searchParams = useSearchParams();
  const poi = searchParams.get("poi");

  useEffect(() => {
    if (!poi && !hasCompletedTutorial()) {
      startNextStep(tourTutorialTitle);
    }
  }, []);

  const isMoving = isPending || !currentPoi;

  useEffect(() => {
    if (!isMoving && !openOverride) {
      setOpenOverride(true);
    }
  }, [isMoving]);

  return (
    <AladinOverlay space="0" className={styles.tourOverlay}>
      <div className={styles.controls}>
        <Orientation
          className={styles.orientation}
          size="var(--size-spacing-l)"
        />
        <ShareTour />
      </div>
      <PoiSlideout
        className={styles.description}
        open={isMoving ? false : openOverride}
        disableToggle={isMoving}
        onOpenChange={setOpenOverride}
      >
        <PoiHeader
          tour={title || undefined}
          title={currentPoi?.title}
          currentStep={position.current}
          totalSteps={position.total}
        />
        <div className={styles.content}>
          {currentPoi && (
            <div dangerouslySetInnerHTML={{ __html: currentPoi.description }} />
          )}
          {currentPoi?.audio && (
            <AudioControls
              key={currentPoi.audio.src}
              className={styles.audio}
              defaultDuration={currentPoi.audio.duration}
              title={`${assetTitle(
                currentPoi.audio.additional,
                language
              )} - ${title}`}
            />
          )}
        </div>
      </PoiSlideout>
      <TourControls className={styles.navigation} />
      <div className={styles.viewScaleContainer}>
        <ViewScale className={styles.viewScale} />
      </div>
    </AladinOverlay>
  );
};

TourPage.displayName = "Page.Tour";

export default TourPage;
