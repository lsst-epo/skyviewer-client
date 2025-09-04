import { FC, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import {
  AnimatePresence,
  motion,
  TargetAndTransition,
  Transition,
} from "motion/react";
import { IoHelpCircleOutline } from "react-icons/io5";

import clsx from "clsx/lite";
import IconButton from "@/components/atomic/IconButton";
import styles from "./styles.module.css";

interface HelpPanelProps {
  buttonClassName?: string;
  className?: string;
}

const HelpPanel: FC<HelpPanelProps> = ({ buttonClassName, className }) => {
  const { t } = useTranslation();
  const id = useId();
  const [isOpen, setOpen] = useState(false);

  const closeHelpPanel = () => {
    setOpen(false);
  };

  const openHelpPanel = () => {
    setOpen(true);
  };

  const toggleHelpPanel = () => {
    if (isOpen) {
      closeHelpPanel();
    } else {
      openHelpPanel();
    }
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
    controls: {
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
        text={t("help.open", "Help")}
        onClick={toggleHelpPanel}
        icon={<IoHelpCircleOutline />}
        className={clsx(styles.toggleButton, buttonClassName)}
      />
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            className={clsx(styles.dialog, className)}
            onClose={closeHelpPanel}
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
                      {t("help.title1", "How it works")}
                    </h2>
                    <CloseButton
                      as={motion.button}
                      className={styles.cancelButton}
                      initial={{ x: 15, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 15, opacity: 0 }}
                      transition={animations.dialog.transition}
                      key={t("help.close", "Close")}
                    >
                      {t("help.close", "Close")}
                    </CloseButton>
                  </div>

                  <div className={styles.textContent}>
                    {t(
                      "help.text",
                      " Explore the Universe through sound. This interactive experience transforms NSF-DOE Vera C. Rubin Observatory's deep view of the night sky into an evolving soundscape, where color becomes pitch and brightness becomes volume."
                    )}
                  </div>
                  <div className={clsx(styles.header, styles.headerNoBorder)}>
                    <h2 className={styles.title}>
                      {t("help.title2", "To begin your exploration")}
                    </h2>
                  </div>
                  <div className={styles.textContent}>
                    <ul>
                      <li>
                        {t(
                          "help.step1",
                          "Press Play to start drifting across Rubin's vast field of view."
                        )}
                      </li>
                      <li>
                        {t(
                          "help.step2",
                          "Use the slider at the bottom of the screen to control how fast you move."
                        )}
                      </li>
                      <li>
                        {t(
                          "help.step3",
                          "Press Pause to take control manually."
                        )}
                      </li>
                      <li>
                        {t(
                          "help.step4",
                          "Use your arrow keys, or the WASD keys to move in any direction."
                        )}
                      </li>
                      <li>
                        {t(
                          "help.step5",
                          "Or, click and drag with your mouse or trackpad (or tap and drag on a touchscreen) to explore freely."
                        )}
                      </li>
                      <li>
                        {t(
                          "help.step6",
                          "Scroll your mouse or press the plus (+) and minus (-) buttons to zoom in and out."
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className={styles.textContent}>
                    <a
                      href="https://rubinobservatory.org/news/rubin-first-look/cosmic-treasure-chest/skysynth-sonification"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.externalLink}
                    >
                      {t(
                        "help.learn_more",
                        "Learn more about the Skysynth sonification"
                      )}
                    </a>
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

export default HelpPanel;
