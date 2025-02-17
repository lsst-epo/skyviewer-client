import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "clsx";
import styles from "./styles.module.css";

interface AladinOverlayProps {
  space?: string;
  className?: string;
}

const AladinOverlay: FunctionComponent<
  PropsWithChildren<AladinOverlayProps>
> = ({ children, space, className }) => {
  return (
    <div
      style={{ "--size-padding-overlay": space }}
      className={styles.aladinOverlay}
    >
      <div className={classNames(className, styles.aladinOverlayInner)}>
        {children}
      </div>
    </div>
  );
};

AladinOverlay.displayName = "Atom.AladinOverlay";

export default AladinOverlay;
