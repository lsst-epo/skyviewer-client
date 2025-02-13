import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.css";

const ScrollingList: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return <ul className={clsx(styles.scrollingList, className)}>{children}</ul>;
};

ScrollingList.displayName = "Molecule.ScrollingList";

export default ScrollingList;
