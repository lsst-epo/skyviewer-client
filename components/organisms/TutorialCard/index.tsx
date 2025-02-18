"use client";
import { FC } from "react";
import { IoMdSkipForward } from "react-icons/io";

import { CardComponentProps } from "nextstepjs";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const TutorialCard: FC<CardComponentProps> = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  arrow,
  skipTour,
}) => {
  const { t } = useTranslation();
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className={styles.cardOuter}>
      {arrow}
      <Stack space="var(--size-spacing-2xs)" className={styles.tutorialCard}>
        {step.icon && <div className={styles.icon}>{step.icon}</div>}
        <div className={styles.content}>{step.content}</div>
        <div className={styles.controls}>
          <button
            className={styles.control}
            onClick={prevStep}
            disabled={isFirstStep}
          >
            {t("navigation.cta.previous")}
          </button>
          {t("tours.tutorial.current_step", {
            step: currentStep + 1,
            total: totalSteps,
          })}
          <button className={styles.control} onClick={nextStep}>
            {isLastStep
              ? t("tours.tutorial.complete")
              : t("navigation.cta.next")}
          </button>
        </div>
        <button
          className={clsx(styles.control, styles.skipButton)}
          onClick={skipTour}
        >
          Skip
          <IoMdSkipForward />
        </button>
      </Stack>
    </div>
  );
};

TutorialCard.displayName = "Organism.TutorialCard";

export default TutorialCard;
