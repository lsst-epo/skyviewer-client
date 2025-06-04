"use client";
import { FC } from "react";
import Zoom from "../Controls/Zoom";
import ControlStack from "../Controls/Stack";
import PlayPauseButton from "./PlayPauseButton/index";
import AladinOverlay from "@/components/atomic/AladinOverlay";

const SonificationControls: FC = () => {
  return (
    <AladinOverlay
      className="controls"
      space="var(--size-spacing-xs) var(--size-spacing-s) var(--size-spacing-xs) var(--size-spacing-xs)"
    >
      <ControlStack position="top right">
        <PlayPauseButton />
      </ControlStack>
      <ControlStack position="middle right">
        <Zoom />
      </ControlStack>
    </AladinOverlay>
  );
};

SonificationControls.displayName = "Molecule.SonificationControls";

export default SonificationControls;
