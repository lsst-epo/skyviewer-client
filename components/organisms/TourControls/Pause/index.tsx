"use client";
import { FC } from "react";
import TourControl from "@/components/molecules/TourControl";
import { useTranslation } from "react-i18next";
import { useTour } from "@/contexts/Tour";

const PauseTour: FC = () => {
  const { t } = useTranslation();
  const { isPending } = useTour();

  return (
    <TourControl onClick={() => {}} disabled={isPending}>
      {t("navigation.cta.pause")}
    </TourControl>
  );
};

PauseTour.displayName = "Organism.TourControls.Pause";

export default PauseTour;
