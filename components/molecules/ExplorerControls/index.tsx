"use client";
import { FC } from "react";
import AladinOverlay from "@/components/atomic/AladinOverlay";
import Share from "./Share";
import Pan from "./Pan";
import Zoom from "../Controls/Zoom";
import Orientation from "./Orientation";
import ToggleGrid from "./ToggleGrid";
import ControlStack from "../Controls/Stack";
import styles from "./styles.module.css";
import FullscreenToggle from "./FullscreenToggle";

const ExplorerControls: FC = () => {
  return (
    <AladinOverlay
      className="controls"
      space="var(--size-spacing-xs) var(--size-spacing-s) var(--size-spacing-xs) var(--size-spacing-xs)"
    >
      <ControlStack position="middle right">
        <Zoom />
      </ControlStack>
      <Pan />
      <ControlStack position="bottom left">
        <FullscreenToggle />
        <Share />
      </ControlStack>
      <ControlStack className={styles.viewControls} position="top right">
        <Orientation />
        <ToggleGrid />
      </ControlStack>
    </AladinOverlay>
  );
};

ExplorerControls.displayName = "Molecule.ExplorerControls";

export default ExplorerControls;
