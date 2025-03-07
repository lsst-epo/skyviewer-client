import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.css";

interface PoiSlideoutInterface {
  open: boolean;
  className?: string;
}

const PoiSlideout: FC<PropsWithChildren<PoiSlideoutInterface>> = ({
  children,
  className,
  open,
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      <section data-open={open} className={styles.content}>
        {children}
      </section>
    </div>
  );
};

PoiSlideout.displayName = "Molecule.Poi.Slideout";

export default PoiSlideout;
