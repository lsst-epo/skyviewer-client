import "./transitions.css";
import { FC, PropsWithChildren } from "react";
import clsx from "clsx/lite";
import styles from "./styles.module.css";

interface ViewTransitionProps {
  name?: string;
  blur?: boolean;
  className?: string;
}

const ViewTransition: FC<PropsWithChildren<ViewTransitionProps>> = ({
  name,
  blur = true,
  className,
  children,
}) => {
  return (
    <>
      {blur && (
        <style>
          {`::view-transition-image-pair(${name}) {
              animation-name: via-blur;
            }`}
        </style>
      )}
      <div
        style={{ "--view-transition-name": name }}
        data-blur={blur}
        className={clsx(styles.transition, className)}
      >
        {children}
      </div>
    </>
  );
};

ViewTransition.displayName = "Atom.ViewTransition";

export default ViewTransition;
