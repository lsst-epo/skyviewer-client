import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface ViewTransitionProps {
  name?: string;
  className?: string;
}

const ViewTransition: FC<PropsWithChildren<ViewTransitionProps>> = ({
  name,
  className,
  children,
}) => {
  return (
    <>
      <div
        style={{ "--view-transition-name": name }}
        className={clsx(styles.transition, className)}
      >
        {children}
      </div>
    </>
  );
};

ViewTransition.displayName = "Atom.ViewTransition";

export default ViewTransition;
