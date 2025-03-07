"use client";
import { FunctionComponent } from "react";
import AladinOverlay from "@/components/primitives/AladinOverlay";
import styles from "./styles.module.css";
import Zoom from "@/components/molecules/Controls/Zoom";
import Orientation from "@/components/molecules/ExplorerControls/Orientation";
import Share from "@/components/molecules/ExplorerControls/Share";
import ToggleGrid from "@/components/molecules/ExplorerControls/ToggleGrid";
import OpenCurrentView from "@/components/molecules/ExplorerControls/OpenCurrentView";
import ControlStack from "@/components/molecules/Controls/Stack";

const EmbeddedExplorer: FunctionComponent = () => {
  return (
    <AladinOverlay space="var(--size-spacing-xs) var(--size-spacing-s) var(--size-spacing-xs) var(--size-spacing-xs)">
      <ControlStack position="bottom left">
        <OpenCurrentView />
        <Share />
      </ControlStack>
      <ControlStack position="middle right">
        <Zoom />
      </ControlStack>
      <ControlStack
        position="top right"
        centered
        className={styles.viewControls}
      >
        <Orientation />
        <ToggleGrid />
      </ControlStack>
    </AladinOverlay>
  );
};

export default EmbeddedExplorer;
