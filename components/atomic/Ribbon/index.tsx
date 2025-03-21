import clsx from "clsx/lite";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.css";

const Ribbon: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return (
    <svg
      className={clsx(styles.ribbon, className)}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="66.001"
      viewBox="0 0 48 66.001"
    >
      <path d="M48,66h0L24,56,0,66V0H48V66Z" />
      {children}
    </svg>
  );
};

Ribbon.displayName = "Atom.Ribbon";

export default Ribbon;
