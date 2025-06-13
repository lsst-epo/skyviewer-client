"use client";
import { FC, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import clsx from "clsx/lite";
import { Trans, useTranslation } from "react-i18next";
import { announce } from "@react-aria/live-announcer";
import { useDebounceValue } from "usehooks-ts";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { AnimatePresence, motion } from "motion/react";
import { useAladin } from "@/contexts/Aladin";
import { fovAreaRubinFootprint } from "@/fixtures/astro";
import useAladinEvent from "@/hooks/useAladinEvent";
import { simplifiedFraction } from "@/lib/utilities";
import styles from "./styles.module.css";

interface ViewScaleProps {
  className?: string;
}

const ViewScale: FC<ViewScaleProps> = ({ className }) => {
  const [showViewScale, setShowViewScale] = useState(true);
  const [fraction, setFraction] = useState<string>();
  const [announcedFraction, setAnnouncedFraction] = useDebounceValue<
    string | null
  >(null, 300);

  const { t } = useTranslation();

  useEffect(() => {
    if (announcedFraction) {
      announce(
        t("controls.view_scale_announce", {
          fraction: announcedFraction,
          interpolation: { escapeValue: false },
        }),
        "polite"
      );
    }
  }, [announcedFraction]);

  const updateFraction = (x: number, y: number) => {
    const area = x * y;
    const newFraction = simplifiedFraction({
      numerator: area,
      denominator: fovAreaRubinFootprint,
    });

    if (newFraction !== fraction) {
      setFraction(newFraction);
      setAnnouncedFraction(newFraction);
    }
  };

  const onLoaded: AdditionalAladinCallbacks["onLoaded"] = ({ aladin }) => {
    updateFraction(...aladin.getFov());
  };

  const onZoomChanged = ({
    detail: { fovX, fovY },
  }: AladinEventMap["zoom.changed"]) => {
    updateFraction(fovX, fovY);
  };

  useAladinEvent("zoom.changed", onZoomChanged);

  useAladin({
    callbacks: { onLoaded },
  });

  if (!fraction) return null;

  return (
    <AnimatePresence mode="wait">
      {showViewScale ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          key="scale"
          className={clsx(styles.viewScale, className)}
        >
          <button
            className={styles.closeButton}
            onClick={() => setShowViewScale(false)}
          >
            <span className="visually-hidden">
              {t("controls.view_scale_close")}
            </span>
            <IoIosClose size="1.25em" />
          </button>
          <span>
            <Trans
              i18nKey="controls.view_scale"
              values={{
                fraction,
              }}
              shouldUnescape={true}
            >
              You are looking at
              <strong>{fraction}</strong>
              of Rubin&apos;s footprint
            </Trans>
          </span>
          <IconComposer icon="Info" size={14} />
        </motion.div>
      ) : (
        <motion.button
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          whileHover={{ opacity: 1 }}
          whileFocus={{ opacity: 1 }}
          whileTap={{ opacity: 1 }}
          key="button"
          className={clsx(styles.openButton, className)}
          onClick={() => setShowViewScale(true)}
        >
          <span className="visually-hidden">
            {t("controls.view_scale_open")}
          </span>
          <IconComposer icon="Info" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

ViewScale.displayName = "Molecule.ExplorerControl.ViewScale";

export default ViewScale;
