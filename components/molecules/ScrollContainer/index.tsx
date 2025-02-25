import { FC, PropsWithChildren } from "react";
import clsx from "clsx/lite";
import styles from "./styles.module.css";

const ScrollContainer: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx(styles.scrollContainer, className)}>{children}</div>
  );
};

ScrollContainer.displayName = "Molecule.ScrollContainer";

export default ScrollContainer;
