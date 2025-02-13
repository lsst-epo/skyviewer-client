import { FunctionComponent } from "react";
import Image from "next/image";
import classNames from "clsx";
import LoadingSpinnerGif from "./loading-spinner.gif";
import styles from "./styles.module.css";

interface LoadingSpinnerProps {
  fillWindow?: boolean;
  className?: string;
}

const LoadingSpinner: FunctionComponent<LoadingSpinnerProps> = ({
  fillWindow = false,
  className,
}) => {
  return (
    <div
      className={classNames(styles.spinnerContainer, className)}
      data-fill-window={fillWindow}
    >
      <Image src={LoadingSpinnerGif} alt="loading spinner" unoptimized />
    </div>
  );
};

LoadingSpinner.displayName = "Atomic.LoadingSpinner";

export default LoadingSpinner;
