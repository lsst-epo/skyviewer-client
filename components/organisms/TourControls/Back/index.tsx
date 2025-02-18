"use client";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams, useRouter } from "next/navigation";
import TourControl from "@/components/molecules/TourControl";

const TourBack: FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const poiParam = searchParams.get("poi");
  const poi = poiParam ? parseInt(poiParam) : undefined;

  const handleBack = () => {
    if (poi && poi > 1) {
      const position = poi - 1;
      params.set("poi", position.toString());
      router.push(`?${params.toString()}`);
    } else {
      router.push("intro");
    }
  };

  return (
    <TourControl onClick={() => handleBack()}>
      {t("navigation.cta.back")}
    </TourControl>
  );
};

TourBack.displayName = "Organism.TourControls.Back";

export default TourBack;
