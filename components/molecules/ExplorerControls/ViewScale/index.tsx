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
    <div className={clsx(styles.container, className)}>
      <AnimatePresence initial={false}>
        {showViewScale ? (
          <motion.div
            key="scale"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={styles.viewScale}
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
            key="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={styles.openButton}
            onClick={() => setShowViewScale(true)}
          >
            <span className="visually-hidden">
              {t("controls.view_scale_open")}
            </span>
            <IconComposer icon="Info" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

ViewScale.displayName = "Molecule.ExplorerControl.ViewScale";

export default ViewScale;
