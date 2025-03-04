"use client";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { NextStep, NextStepProvider, Tour } from "nextstepjs";
import { completeTutorial, steps, tourTutorialTitle } from "@/lib/tutorial";
import TutorialCard from "../TutorialCard";
import styles from "./styles.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TourTutorial: FC<PropsWithChildren> = ({ children }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { t } = useTranslation();
  const tutorial: Tour = {
    tour: tourTutorialTitle,
    steps: steps.map((step, i) => {
      return { ...step, content: t("tours.tutorial.step", { context: i }) };
    }),
  };

  const moveToTour = () => {
    params.set("poi", "1");

    push(`${pathname}?${params.toString()}`);
  };

  const onComplete = (tourName: string | null) => {
    if (tourName === tourTutorialTitle) {
      completeTutorial();
      moveToTour();
    }
  };

  const onSkip = () => {
    completeTutorial();
    moveToTour();
  };

  return (
    <div className={styles.nextStep}>
      <NextStepProvider>
        <NextStep
          steps={[tutorial]}
          shadowOpacity="0"
          cardTransition={{ type: "spring", bounce: 0 }}
          clickThroughOverlay={false}
          cardComponent={TutorialCard}
          disableConsoleLogs={true}
          {...{ onComplete, onSkip }}
        >
          {children}
        </NextStep>
      </NextStepProvider>
    </div>
  );
};

TourTutorial.displayName = "Organism.TourTutorial";

export default TourTutorial;
