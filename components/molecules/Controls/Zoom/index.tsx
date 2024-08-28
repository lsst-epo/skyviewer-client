"use client";
import { FunctionComponent } from "react";
import classNames from "classnames";
import { useAladin } from "@/contexts/Aladin";
import { useKeyDownEvent } from "@/hooks/listeners";
import IconButton from "@/components/primitives/IconButton";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import ControlsContainer from "../Container";

interface ZoomProps {
  className?: string;
}

const Zoom: FunctionComponent<ZoomProps> = ({ className }) => {
  const { t } = useTranslation();
  const { aladin, hasFocus, isLoading } = useAladin();

  const handleZoomIn = () => {
    aladin?.increaseZoom();
  };

  const handleZoomOut = () => {
    aladin?.decreaseZoom();
  };

  function handleKeyDown(event) {
    const { key } = event;

    if (key !== "+" && key !== "=" && key !== "-" && key !== "_") return;

    if (key === "+" || key === "=") {
      handleZoomIn();
    } else if (key === "-" || key === "_") {
      handleZoomOut();
    }
  }

  useKeyDownEvent(hasFocus ? handleKeyDown : null);

  return (
    <ControlsContainer {...{ className }}>
      <IconButton
        text={t("controls.zoom_in")}
        icon="Plus"
        onClick={handleZoomIn}
        disabled={isLoading}
      />
      <IconButton
        text={t("controls.zoom_out")}
        icon="Minus"
        onClick={handleZoomOut}
        disabled={isLoading}
      />
    </ControlsContainer>
  );
};

Zoom.displayName = "Molecule.Control.Zoom";

export default Zoom;
