"use client";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import TourControl from "@/components/molecules/TourControl";
import { useTour } from "@/contexts/Tour";

const TourBack: FC = () => {
  const { t } = useTranslation();
  const { previousPoi, isPending } = useTour();

  const handleBack = () => {
    previousPoi();
  };

  return (
    <TourControl onClick={() => handleBack()} disabled={isPending}>
      {t("navigation.cta.back")}
    </TourControl>
  );
};

TourBack.displayName = "Organism.TourControls.Back";

export default TourBack;
