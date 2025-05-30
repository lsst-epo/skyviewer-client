"use client";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Checkbox } from "@headlessui/react";

import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

interface PoiSlideoutInterface {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disableToggle?: boolean;
  className?: string;
}

const PoiSlideout: FC<PropsWithChildren<PoiSlideoutInterface>> = ({
  children,
  className,
  onOpenChange,
  open,
  disableToggle,
}) => {
  const { t } = useTranslation();
  const label = t("tour.description.toggle", {
    context: open ? "hide" : "show",
  });
  return (
    <div className={clsx(styles.container, className)}>
      <section data-open={open} className={styles.content}>
        <Checkbox
          className={styles.toggle}
          value={open}
          onChange={onOpenChange}
          disabled={disableToggle}
          aria-label={label}
          title={label}
        >
          {open ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </Checkbox>
        {children}
      </section>
    </div>
  );
};

PoiSlideout.displayName = "Molecule.Poi.Slideout";

export default PoiSlideout;
