"use client";
import { FC } from "react";
import AladinOverlay from "@/components/atomic/AladinOverlay";
import Share from "./Share";
import Pan from "./Pan";
import Zoom from "../Controls/Zoom";
import Orientation from "./Orientation";
import ToggleGrid from "./ToggleGrid";
import ControlStack from "../Controls/Stack";
import FullscreenToggle from "./FullscreenToggle";
import ReturnToInital from "./ReturnToInitial";
import ViewScale from "./ViewScale";
import styles from "./styles.module.css";

const ExplorerControls: FC = () => {
  return (
    <AladinOverlay
      className={styles.controls}
      space="var(--size-spacing-xs) var(--size-spacing-s) var(--size-spacing-xs) var(--size-spacing-xs)"
    >
      <div className={styles.nonViewScale}>
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
          <ReturnToInital />
          <ToggleGrid />
        </ControlStack>
      </div>
      <ControlStack
        className={styles.viewScaleContainer}
        position="bottom center"
      >
        <ViewScale className={styles.viewScale} />
      </ControlStack>
    </AladinOverlay>
  );
};

ExplorerControls.displayName = "Molecule.ExplorerControls";

export default ExplorerControls;
