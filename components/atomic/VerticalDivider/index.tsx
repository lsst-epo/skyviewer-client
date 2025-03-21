import clsx from "clsx/lite";
import { FC } from "react";
import styles from "./styles.module.css";

const VerticalDivider: FC<{ className?: string }> = ({ className }) => {
  return <div className={clsx(styles.verticalDivider, className)} />;
};

VerticalDivider.displayName = "Atom.VerticalDivider";

export default VerticalDivider;
