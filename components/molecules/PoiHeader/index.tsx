import clsx from "clsx/lite";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

interface PoiHeaderProps {
  title?: string;
  tour?: string;
  currentStep?: number;
  totalSteps: number;
  className?: string;
}

const PoiHeader: FC<PoiHeaderProps> = ({
  title,
  tour,
  currentStep,
  totalSteps,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.tourTitle}>
        {tour}&nbsp;
        {t("tour.description.location", {
          step: currentStep,
          total: totalSteps,
        })}
      </div>
      <h2 className={styles.objectTitle}>{title}</h2>
    </header>
  );
};

PoiHeader.displayName = "Molecule.Poi.Header";

export default PoiHeader;
