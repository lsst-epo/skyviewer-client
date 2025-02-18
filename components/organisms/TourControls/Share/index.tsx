"use client";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useStep } from "@/lib/tutorial";
import TourControl from "@/components/molecules/TourControl";
import styles from "./styles.module.css";

const ShareTour: FC = () => {
  const { id, active } = useStep(2);
  const { t } = useTranslation();

  return (
    <TourControl
      className={styles.button}
      isActiveTutorialStep={active}
      onClick={() => {}}
    >
      {t("navigation.cta.share")}
      <div className={styles.pseudo} id={id} />
    </TourControl>
  );
};

ShareTour.displayName = "Organism.TourControls.Share";

export default ShareTour;
