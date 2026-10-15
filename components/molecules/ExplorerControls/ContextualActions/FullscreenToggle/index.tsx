"use client";
import { FC, useCallback, useState } from "react";
import clsx from "clsx";
import screenfull from "screenfull";
import { useTranslation } from "react-i18next";
import { IoMdExpand, IoIosClose } from "react-icons/io";
import { useAladin } from "@/contexts/Aladin";
import IconButton from "@/components/atomic/IconButton";
import styles from "./styles.module.css";

interface FullscreenToggleProps {
  className?: string;
}

const FullscreenToggle: FC<FullscreenToggleProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isFullscreen, setFullscreen] = useState(false);
  const { isLoading, aladin } = useAladin();

  const onFullscreenChange = useCallback(() => {
    setFullscreen(screenfull.isFullscreen);
  }, []);

  const toggleFullscreen = () => {
    if (!isLoading && screenfull.isEnabled) {
      if (screenfull.isFullscreen) {
        screenfull.exit().then(() => {
          screenfull.off("change", onFullscreenChange);
          setFullscreen(false);
        });
      } else {
        screenfull
          .request(aladin.view.aladinDiv.parentElement ?? undefined)
          .then(() => {
            screenfull.on("change", onFullscreenChange);
            setFullscreen(true);
          });
      }
    }
  };

  return (
    <IconButton
      icon={isFullscreen ? <IoIosClose /> : <IoMdExpand />}
      text={t("controls.fullscreen", {
        context: isFullscreen ? "close" : "open",
      })}
      onClick={toggleFullscreen}
      disabled={isLoading}
      className={clsx(styles.fullscreenToggle, className)}
    />
  );
};

FullscreenToggle.displayName = "Molecule.ExplorerControl.FullscreenToggle";

export default FullscreenToggle;
