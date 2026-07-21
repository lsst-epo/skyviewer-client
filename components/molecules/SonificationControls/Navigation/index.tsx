import { FC, useState } from "react";
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
import destinations, { Destination } from "./destinations";
import IconButton from "@/components/atomic/IconButton";
import parameters from "@/components/organisms/Listener/parameters";
import { useAladin } from "@/contexts/Aladin";
import useAladinMove from "@/hooks/useAladinMove";
import styles from "./styles.module.css";

interface NavigationProps {
  buttonClassName?: string;
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ buttonClassName, className }) => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const { isLoading } = useAladin();
  const goToPosition = useAladinMove();

  const closeNavigation = () => {
    setOpen(false);
  };

  const toggleNavigation = () => {
    setOpen(!isOpen);
  };

  const handleDestinationClick = ({ ra, dec, layerId }: Destination) => {
    if (isLoading) return;

    closeNavigation();
    // Pause the walker's movement and void/boundary tracking while we travel
    parameters.resettingPosition = true;
    parameters.selectedLayerId = layerId;
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
                            className={styles.destinationButton}
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
