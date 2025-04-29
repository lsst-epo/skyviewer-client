import { FunctionComponent, PropsWithChildren } from "react";
import classNames, { clsx } from "clsx/lite";
import styles from "./styles.module.css";

interface AladinOverlayProps {
  space?: string;
  className?: string;
  wrapperClassName?: string;
}

const AladinOverlay: FunctionComponent<
  PropsWithChildren<AladinOverlayProps>
> = ({ children, space, className, wrapperClassName }) => {
  return (
    <div
      style={{ "--size-padding-overlay": space }}
      className={clsx(styles.aladinOverlay, wrapperClassName)}
    >
      <div className={classNames(className, styles.aladinOverlayInner)}>
        {children}
      </div>
    </div>
  );
};

AladinOverlay.displayName = "Atom.AladinOverlay";

export default AladinOverlay;
