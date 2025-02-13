import { FC, ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface TourAttributeProps {
  title: ReactNode;
  symbol: ReactNode;
  attribute: ReactNode;
  responsive?: boolean;
  className?: string;
}

const TourAttribute: FC<TourAttributeProps> = ({
  title,
  symbol,
  attribute,
  responsive = true,
  className,
}) => {
  return (
    <div
      data-responsive={responsive}
      className={clsx(styles.tourAttribute, className)}
    >
      <span className={styles.title}>{title}</span>
      {symbol}
      <span className={styles.attribute}>{attribute}</span>
    </div>
  );
};

TourAttribute.displayName = "Molecule.TourAttribute";

export default TourAttribute;
