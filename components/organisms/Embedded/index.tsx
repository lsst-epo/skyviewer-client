"use client";
import { FunctionComponent } from "react";
import AladinOverlay from "@/components/atomic/AladinOverlay";
import Zoom from "@/components/molecules/Controls/Zoom";
import Share from "@/components/molecules/ExplorerControls/Share";
import OpenCurrentView from "@/components/molecules/ExplorerControls/OpenCurrentView";
import ControlStack from "@/components/molecules/Controls/Stack";
import FullscreenToggle from "@/components/molecules/ExplorerControls/FullscreenToggle";
import ReturnToInital from "@/components/molecules/ExplorerControls/ReturnToInitial";
import ViewScale from "@/components/molecules/ExplorerControls/ViewScale";
import OpenTours from "@/components/molecules/ExplorerControls/OpenTours";
import styles from "./styles.module.css";
import useAladinKeyboardControls from "@/hooks/useAladinKeyboardControls";

const EmbeddedExplorer: FunctionComponent = () => {
  useAladinKeyboardControls();
  return (
    <AladinOverlay space="var(--size-spacing-xs) var(--size-spacing-s) var(--size-spacing-xs) var(--size-spacing-xs)">
      <div className={styles.nonViewScale}>
        <ControlStack position="top right">
          <ReturnToInital />
        </ControlStack>
        <ControlStack position="bottom left">
          <OpenTours />
          <OpenCurrentView />
          <FullscreenToggle />
          <Share />
        </ControlStack>
        <ControlStack position="middle right">
          <Zoom />
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

export default EmbeddedExplorer;
