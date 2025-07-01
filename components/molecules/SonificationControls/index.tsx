"use client";
import { FC, useState } from "react";
import Zoom from "../Controls/Zoom";
import ControlStack from "../Controls/Stack";
import ReturnToInitial from "../ExplorerControls/ReturnToInitial";
import PlayPauseButton from "./PlayPauseButton/index";
import OrientedSlider from "./OrientedSlider";
import HelpPanel from "./HelpPanel";
import parameters from "@/components/organisms/Listener/parameters";
import AladinOverlay from "@/components/atomic/AladinOverlay";
import styles from "./styles.module.css";

const SonificationControls: FC = () => {
  const [sliderValue, setSliderValue] = useState(parameters.walkSpeed);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    parameters.walkSpeed = value;
    parameters.keyboardSpeed = value;
  };

  return (
    <AladinOverlay
      className="controls"
      space="var(--size-spacing-xs) var(--size-spacing-s) var(--size-spacing-xs) var(--size-spacing-xs)"
    >
      <div className={styles.controlsWrapper}>
        <ControlStack position="top left">
          <HelpPanel />
        </ControlStack>
        <ControlStack position="top right">
          <PlayPauseButton />
        </ControlStack>
        <ControlStack position="middle right">
          <div className={styles.centeredControls}>
            <ReturnToInitial />
            <Zoom />
          </div>
        </ControlStack>
        <ControlStack position="bottom center">
          <OrientedSlider
            min={0.1}
            max={1}
            step={0.02}
            value={sliderValue}
            onChange={handleSliderChange}
            orientation="horizontal"
          />
        </ControlStack>
      </div>
    </AladinOverlay>
  );
};

SonificationControls.displayName = "Molecule.SonificationControls";

export default SonificationControls;
