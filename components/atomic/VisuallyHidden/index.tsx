import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";
const VisuallyHidden: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <span className={clsx(styles.visuallyHidden, className)}>{children}</span>
  );
};

VisuallyHidden.displayName = "Atom.VisuallyHidden";

export default VisuallyHidden;
