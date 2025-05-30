"use client";
import { FC } from "react";
import AladinOverlay from "@/components/atomic/AladinOverlay";
import Share from "../../organisms/Share";
import Zoom from "../Controls/Zoom";
import Orientation from "./Orientation";
import ToggleGrid from "./ToggleGrid";
import ControlStack from "../Controls/Stack";
import FullscreenToggle from "./FullscreenToggle";
import ReturnToInital from "./ReturnToInitial";
import Search from "./Search";
import ViewScale from "./ViewScale";
import styles from "./styles.module.css";
import useAladinKeyboardControls from "@/hooks/useAladinKeyboardControls";

const ExplorerControls: FC = () => {
  useAladinKeyboardControls();

  return (
    <AladinOverlay
      className={styles.controls}
      space="var(--size-spacing-xs) var(--size-spacing-s) var(--size-spacing-xs) var(--size-spacing-xs)"
    >
      <div className={styles.nonViewScale}>
        <ControlStack position="top left">
          <Search />
        </ControlStack>
        <ControlStack className={styles.viewControls} position="top right">
          <Orientation />
          <ReturnToInital />
          <ToggleGrid />
        </ControlStack>
        <ControlStack position="middle right">
          <Zoom />
        </ControlStack>
        <ControlStack position="bottom left">
          <FullscreenToggle />
          <Share />
        </ControlStack>
      </div>
      <ControlStack
        className={styles.viewScaleContainer}
        position="bottom center"
      >
        <ViewScale />
      </ControlStack>
    </AladinOverlay>
  );
};

ExplorerControls.displayName = "Molecule.ExplorerControls";

export default ExplorerControls;
