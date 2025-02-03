import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

const AladinOverlay: FunctionComponent<
  PropsWithChildren<{ className?: string }>
> = ({ children, className }) => {
  return (
    <div className={styles.aladinOverlay}>
      <div className={classNames(className, styles.aladinOverlayInner)}>
        {children}
      </div>
    </div>
  );
};

AladinOverlay.displayName = "Atom.AladinOverlay";

export default AladinOverlay;
