import { FC, PropsWithChildren } from "react";
import clsx from "clsx/lite";
import styles from "./styles.module.css";

interface WithButtonLabelProps {
  label: string;
  showLabel?: boolean;
  className?: string;
}

const WithButtonLabel: FC<PropsWithChildren<WithButtonLabelProps>> = ({
  label,
  showLabel = true,
  className,
  children,
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      {children}
      {showLabel && <span className={styles.label}>{label}</span>}
    </div>
  );
};

WithButtonLabel.displayName = "Atom.WithButtonLabel";

export default WithButtonLabel;
