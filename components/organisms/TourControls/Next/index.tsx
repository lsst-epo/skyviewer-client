"use client";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useStep } from "@/lib/tutorial";
import { useTour } from "@/contexts/Tour";
import TourControl from "@/components/molecules/TourControl";
import styles from "./styles.module.css";

const TourNext: FC = () => {
  const { id, active } = useStep(3);
  const { t } = useTranslation();
  const { nextPoi, isPending } = useTour();

  const handleNext = () => {
    nextPoi();
  };

  return (
    <TourControl
      isActiveTutorialStep={active}
      onClick={() => handleNext()}
      disabled={isPending}
    >
      {t("navigation.cta.next")}
      <div className={styles.pseudo} id={id} />
    </TourControl>
  );
};

TourNext.displayName = "Organism.TourControls.Next";

export default TourNext;
