"use client";
import { FunctionComponent } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

import { useTranslation } from "react-i18next";
import { useAladin } from "@/contexts/Aladin";
import IconButton from "@/components/atomic/IconButton";

const Zoom: FunctionComponent = () => {
  const { t } = useTranslation();
  const { aladin, isLoading } = useAladin();

  const handleZoomIn = () => {
    aladin?.increaseZoom();
  };

  const handleZoomOut = () => {
    aladin?.decreaseZoom();
  };

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
