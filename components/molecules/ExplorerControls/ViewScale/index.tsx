"use client";
import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import { Trans, useTranslation } from "react-i18next";
import { announce } from "@react-aria/live-announcer";
import { useDebounceValue } from "usehooks-ts";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { useAladin } from "@/contexts/Aladin";
import { fovAreaRubinFootprint } from "@/fixtures/astro";
import useAladinEvent from "@/hooks/useAladinEvent";
import { simplifiedFraction } from "@/lib/utilities";
import styles from "./styles.module.css";

interface ViewScaleProps {
  className?: string;
}

const ViewScale: FC<ViewScaleProps> = ({ className }) => {
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
  }: AladinZoomChangedEvent) => {
    updateFraction(fovX, fovY);
  };

  useAladinEvent("zoom.changed", onZoomChanged);

  useAladin({
    callbacks: { onLoaded },
  });

  if (!fraction) return null;

  return (
    <>
      <div className={clsx(styles.viewScale, className)}>
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
      </div>
    </>
  );
};

ViewScale.displayName = "Molecule.ExplorerControl.ViewScale";

export default ViewScale;
