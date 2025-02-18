"use client";
import { FC } from "react";
import TourControl from "@/components/molecules/TourControl";
import { useTranslation } from "react-i18next";

const PauseTour: FC = () => {
  const { t } = useTranslation();

  return (
    <TourControl onClick={() => {}}>{t("navigation.cta.pause")}</TourControl>
  );
};

PauseTour.displayName = "Organism.TourControls.Pause";

export default PauseTour;
