"use client";
import { FC } from "react";
import Share from "../../organisms/Share";
import Zoom from "../Controls/Zoom";
import ControlStack from "../Controls/Stack";
import Orientation from "./Orientation";
import ToggleGrid from "./ToggleGrid";
import FullscreenToggle from "./FullscreenToggle";
import ReturnToInital from "./ReturnToInitial";
import Search from "./Search";
import ViewScale from "./ViewScale";
import AladinOverlay from "@/components/atomic/AladinOverlay";
import useAladinKeyboardControls from "@/hooks/useAladinKeyboardControls";
import styles from "./styles.module.css";

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
          <Share embed />
        </ControlStack>
      </div>
      {/* <ControlStack
        className={styles.viewScaleContainer}
        position="bottom center"
      >
        <ViewScale />
      </ControlStack> */}
      <ViewScale className={styles.viewScaleContainer} />
    </AladinOverlay>
  );
};

ExplorerControls.displayName = "Molecule.ExplorerControls";

export default ExplorerControls;
