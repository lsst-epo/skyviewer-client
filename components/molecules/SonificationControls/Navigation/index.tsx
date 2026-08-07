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
import { Destination } from "./destinations";
import IconButton from "@/components/atomic/IconButton";
import parameters from "@/components/organisms/Listener/parameters";
import { useAladin } from "@/contexts/Aladin";
import useAladinMove from "@/hooks/useAladinMove";
import styles from "./styles.module.css";

interface NavigationProps {
  layers: any;
  target: string;
  buttonClassName?: string;
  className?: string;
}

function generateDestinations(layers: []): Destination[] {
  if (!layers?.length) return [];

  return (
    [...layers]
      // reversing to match how the layers are loaded into Aladin in order to get the correct base layer
      .reverse()
      .map((layer, index) => {
        const [ra, dec] = layer.survey.target.split(" ").map(Number);

        return {
          id: layer.survey.id,
          layerId: index === 0 ? "base" : layer.id,
          label: layer.survey.title,
          description: layer.survey.description,
          ra,
          dec,
        };
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

const Navigation: FC<NavigationProps> = ({
  layers,
  target,
  buttonClassName,
  className,
}) => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const { isLoading } = useAladin();
  const goToPosition = useAladinMove();
  const hasInitializedLayer = useRef(false);

  // SOSHTODO: DELETE
  console.log("[Navigation] layers: ", layers);
  const destinations: Destination[] = generateDestinations(layers);
  // SOSHTODO: DELETE
  console.log("[Navigation] destinations: ", destinations);

  const initialDestination =
    findDestinationByTarget(destinations, target) ?? destinations[0];

  // Only sync layer on first render — later updates come from handleDestinationClick
  if (initialDestination && !hasInitializedLayer.current) {
    parameters.selectedLayerId = initialDestination.layerId;
    hasInitializedLayer.current = true;
  }

  const [selectedId, setSelectedId] = useState<string | null>(
    initialDestination?.id ?? null,
  );

  const closeNavigation = () => {
    setOpen(false);
  };

  const toggleNavigation = () => {
    setOpen(!isOpen);
  };

  const handleDestinationClick = ({ id, ra, dec, layerId }: Destination) => {
    if (isLoading) return;
    // SOSHTODO: DELETE
    console.log(
      `[Navigation] destinationClicked: ${id} ${ra} ${dec} ${layerId}`,
    );

    setSelectedId(id);
    // SOSHTODO: DELETE
    console.log("[Navigation] selectedId: ", selectedId);
    closeNavigation();
    // Pause the walker's movement and void/boundary tracking while we travel
    parameters.resettingPosition = true;
    parameters.selectedLayerId = layerId;
    // SOSHTODO: DELETE
    console.log("[Navigation] selectedLayerId: ", parameters.selectedLayerId);
    goToPosition({
      ra,
      dec,
      onComplete: () => {
        parameters.resettingPosition = false;
        // TODO: We shouuld reset the RA/DEC in parameters and run getPoints() here
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
        text={t("skysynth-navigation.open", "Navigation")}
        onClick={toggleNavigation}
        icon={<IconComposer icon="Pin" />}
        className={clsx(styles.toggleButton, buttonClassName)}
      />
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            className={clsx(styles.dialog, className)}
            onClose={closeNavigation}
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
                      {t("skysynth-navigation.title", "Navigation")}
                    </h2>
                    <CloseButton
                      as={motion.button}
                      className={styles.cancelButton}
                      initial={{ x: 15, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 15, opacity: 0 }}
                      transition={animations.dialog.transition}
                      key={t("skysynth-navigation.close", "Close")}
                    >
                      {t("skysynth-navigation.close", "Close")}
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
                                `skysynth-navigation.destinations.${destination.id}.label`,
                                destination.label,
                              )}
                            </span>
                            {destination.description && (
                              <span className={styles.destinationDescription}>
                                {t(
                                  `skysynth-navigation.destinations.${destination.id}.description`,
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

export default Navigation;
