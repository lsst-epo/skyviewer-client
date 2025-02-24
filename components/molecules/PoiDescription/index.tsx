"use client";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import clsx from "clsx";

interface PoiDescriptionProps {
  isOpen: boolean;
  tourTitle: string | null;
  title?: string;
  description?: string;
  currentStep?: number;
  totalSteps: number;
  className?: string;
}

const PoiDescription: FunctionComponent<PoiDescriptionProps> = ({
  isOpen = false,
  tourTitle,
  title,
  description = "",
  currentStep,
  totalSteps,
  className,
}) => {
  const { t } = useTranslation();
  return (
    <div className={clsx(styles.container, className)}>
      <article data-open={isOpen} className={styles.description}>
        <header className={styles.header}>
          {tourTitle && (
            <div className={styles.tourTitle}>
              {tourTitle}&nbsp;
              {t("tour.description.location", {
                step: currentStep,
                total: totalSteps,
              })}
            </div>
          )}
          <h2 className={styles.objectTitle}>{title}</h2>
        </header>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </article>
    </div>
  );
};

PoiDescription.displayName = "Molecule.PoiDescription";

export default PoiDescription;
