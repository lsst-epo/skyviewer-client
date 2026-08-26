import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import {
  AnimatePresence,
  motion,
  TargetAndTransition,
  Transition,
} from "motion/react";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import clsx from "clsx/lite";

import type { SurveyLayer } from "@/lib/schema/survey";
import IconButton from "@/components/atomic/IconButton";
import { useAladin } from "@/contexts/Aladin";
import useAladinMove from "@/hooks/useAladinMove";
import styles from "./styles.module.css";

interface Destination {
  id: string;
  layerId: string;
  label: string;
  description?: string;
  ra: number;
  dec: number;
}

interface DestinationPickerProps {
  layers: SurveyLayer[];
  target: string;
  buttonClassName?: string;
  className?: string;
  onInitialDestination?: (destination: Destination) => void;
  onDestinationSelected?: (destination: Destination) => void;
  onNavigationComplete?: (destination: Destination) => void;
}

function generateDestinations(layers: SurveyLayer[]): Destination[] {
  if (!layers?.length) return [];

  return (
    [...layers]
      // reversing to match how the layers are loaded into Aladin in order to get the correct base layer
      .reverse()
      .flatMap((layer, layerIndex) => {
        if (!layer.survey.navPois.length) return [];

        return layer.survey.navPois
          .filter((navPoi) => navPoi.enabledInNavigation)
          .map((navPoi) => {
            return {
              id: navPoi.id,
              layerId: layerIndex === 0 ? "base" : layer.id,
              label: navPoi.navPoiTitle,
              description: navPoi.navPoiDescription || "",
              ra: navPoi.ra,
              dec: navPoi.dec,
            };
          });
      })
  );
}

function findDestinationByTarget(
  destinations: Destination[],
  target: string,
): Destination | undefined {
  const [targetRa, targetDec] = target.split(" ").map(Number);

  return destinations.find(
    (destination) =>
      // Comparing the RA and DEC we get on load to the ones in destinations. Should we be rounding these numbers?
      destination.ra === targetRa && destination.dec === targetDec,
  );
}

const DestinationPicker: FC<DestinationPickerProps> = ({
  layers,
  target,
  buttonClassName,
  className,
  onInitialDestination,
  onDestinationSelected,
  onNavigationComplete,
}) => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const { isLoading } = useAladin();
  const goToPosition = useAladinMove();
  const hasInitializedLayer = useRef(false);
  const destinations: Destination[] = generateDestinations(layers);

  const initialDestination =
    findDestinationByTarget(destinations, target) ?? destinations[0];

  // Only sync layer on first render — later updates come from handleDestinationClick
  if (initialDestination && !hasInitializedLayer.current) {
    onInitialDestination?.(initialDestination);
    hasInitializedLayer.current = true;
  }

  const [selectedId, setSelectedId] = useState<string | null>(
    initialDestination?.id ?? null,
  );

  const closeDestinationPicker = () => {
    setOpen(false);
  };

  const toggleDestinationPicker = () => {
    setOpen(!isOpen);
  };

  const handleDestinationClick = (destination: Destination) => {
    const { id, ra, dec } = destination;

    if (isLoading) return;

    setSelectedId(id);

    closeDestinationPicker();
    // Pause the walker's movement and void/boundary tracking while we travel
    onDestinationSelected?.(destination);

    goToPosition({
      ra,
      dec,
      onComplete: () => {
        onNavigationComplete?.(destination);
      },
    });
  };

  const animations: Record<
    string,
    {
      initial: TargetAndTransition;
      animate: TargetAndTransition;
      exit: TargetAndTransition;
      transition: Transition;
    }
  > = {
    dialog: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.4, ease: "easeInOut", type: "tween" },
    },
  };

  return (
    <>
      <IconButton
        styleAs="primary"
        text={t("destination-picker.open", "Navigation")}
        onClick={toggleDestinationPicker}
        icon={<IconComposer icon="Pin" />}
        className={clsx(styles.toggleButton, buttonClassName)}
      />
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            className={clsx(styles.dialog, className)}
            onClose={closeDestinationPicker}
          >
            <DialogPanel className={styles.panel}>
              <motion.div className={styles.backdrop} {...animations.dialog} />
              <motion.div
                className={styles.contentWrapper}
                {...animations.dialog}
              >
                <div className={styles.content}>
                  <div className={styles.header}>
                    <h2 className={styles.title}>
                      {t("destination-picker.title", "Navigation")}
                    </h2>
                    <CloseButton
                      as={motion.button}
                      className={styles.cancelButton}
                      initial={{ x: 15, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 15, opacity: 0 }}
                      transition={animations.dialog.transition}
                      key={t("destination-picker.close", "Close")}
                    >
                      {t("destination-picker.close", "Close")}
                    </CloseButton>
                  </div>
                  <div className={styles.textContent}>
                    <ul className={styles.destinationList}>
                      {destinations.map((destination) => (
                        <li key={destination.id}>
                          <button
                            type="button"
                            className={clsx(
                              styles.destinationButton,
                              selectedId === destination.id &&
                                styles.destinationButtonSelected,
                            )}
                            aria-pressed={selectedId === destination.id}
                            disabled={isLoading}
                            onClick={() => handleDestinationClick(destination)}
                          >
                            <span className={styles.destinationLabel}>
                              {t(
                                `destination-picker.destinations.${destination.id}.label`,
                                destination.label,
                              )}
                            </span>
                            {destination.description && (
                              <span className={styles.destinationDescription}>
                                {t(
                                  `destination-picker.destinations.${destination.id}.description`,
                                  destination.description,
                                )}
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default DestinationPicker;
