"use client";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, useSearchParams } from "next/navigation";
import { useStep } from "@/lib/tutorial";
import TourControl from "@/components/molecules/TourControl";
import styles from "./styles.module.css";

const TourNext: FC<{ poiLimit: number }> = ({ poiLimit }) => {
  const { id, active } = useStep(3);
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const poiParam = searchParams.get("poi");
  const poi = poiParam ? parseInt(poiParam) : undefined;

  const handleNext = () => {
    if (poi && poi < poiLimit) {
      const position = poi + 1;
      params.set("poi", position.toString());
    } else if (poi && poi >= poiLimit) {
      router.push("/");
    } else {
      params.set("poi", "1");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <TourControl isActiveTutorialStep={active} onClick={() => handleNext()}>
      {t("navigation.cta.next")}
      <div className={styles.pseudo} id={id} />
    </TourControl>
  );
};

TourNext.displayName = "Organism.TourControls.Next";

export default TourNext;
