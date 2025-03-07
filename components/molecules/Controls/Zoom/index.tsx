"use client";
import { FunctionComponent } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

import { useAladin } from "@/contexts/Aladin";
import { useKeyDownEvent } from "@/hooks/listeners";
import IconButton from "@/components/primitives/IconButton";
import { useTranslation } from "react-i18next";

const Zoom: FunctionComponent = () => {
  const { t } = useTranslation();
  const { aladin, hasFocus, isLoading } = useAladin();

  const handleZoomIn = () => {
    aladin?.increaseZoom();
  };

  const handleZoomOut = () => {
    aladin?.decreaseZoom();
  };

  function handleKeyDown(event) {
    if (hasFocus) {
      const { key } = event;

      if (key !== "+" && key !== "=" && key !== "-" && key !== "_") return;

      if (key === "+" || key === "=") {
        handleZoomIn();
      } else if (key === "-" || key === "_") {
        handleZoomOut();
      }
    }
  }

  useKeyDownEvent(handleKeyDown);

  return (
    <>
      <IconButton
        text={t("controls.zoom_in")}
        icon={<IoIosAdd />}
        onClick={handleZoomIn}
        disabled={isLoading}
      />
      <IconButton
        text={t("controls.zoom_out")}
        icon={<IoIosRemove />}
        onClick={handleZoomOut}
        disabled={isLoading}
      />
    </>
  );
};

Zoom.displayName = "Molecule.Control.Zoom";

export default Zoom;
