import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "clsx";
import styles from "./styles.module.css";

const Cover: FunctionComponent<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return <div className={classNames(styles.cover, className)}>{children}</div>;
};

Cover.displayName = "Molecules.Cover";

export default Cover;
