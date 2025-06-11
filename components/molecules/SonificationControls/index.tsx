"use client";
import { FC, useState } from "react";
import HorizontalSlider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import Zoom from "../Controls/Zoom";
import ControlStack from "../Controls/Stack";
import ReturnToInitial from "../ExplorerControls/ReturnToInitial";
import PlayPauseButton from "./PlayPauseButton/index";
import parameters from "@/components/organisms/Listener/parameters";
import AladinOverlay from "@/components/atomic/AladinOverlay";
import styles from "./styles.module.css";

const SonificationControls: FC = () => {
  const [sliderValue, setSliderValue] = useState(0.5);

  return (
    <AladinOverlay
      className="controls"
      space="var(--size-spacing-xs) var(--size-spacing-s) var(--size-spacing-xs) var(--size-spacing-xs)"
    >
      <div className={styles.controlsWrapper}>
        <ControlStack position="top right">
          <PlayPauseButton />
        </ControlStack>
        <ControlStack position="middle right">
          <div className={styles.centeredControls}>
            <ReturnToInitial />
            <Zoom />
          </div>
        </ControlStack>
        <ControlStack position="bottom right">
          <HorizontalSlider
            styleAs="dark"
            min={0.1}
            max={1}
            step={0.1}
            value={sliderValue}
            onChangeCallback={(value) => {
              if (typeof value === "number") {
                setSliderValue(value);
                parameters.walkSpeed = value;
                parameters.keyboardSpeed = value;
              }
            }}
            className={styles.slider}
          />
        </ControlStack>
      </div>
    </AladinOverlay>
  );
};

SonificationControls.displayName = "Molecule.SonificationControls";

export default SonificationControls;
