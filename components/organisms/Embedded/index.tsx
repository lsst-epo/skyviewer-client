"use client";
import { FunctionComponent } from "react";
import AladinOverlay from "@/components/atomic/AladinOverlay";
import Zoom from "@/components/molecules/Controls/Zoom";
import Share from "@/components/molecules/ExplorerControls/Share";
import OpenCurrentView from "@/components/molecules/ExplorerControls/OpenCurrentView";
import ControlStack from "@/components/molecules/Controls/Stack";
import FullscreenToggle from "@/components/molecules/ExplorerControls/FullscreenToggle";
import ReturnToInital from "@/components/molecules/ExplorerControls/ReturnToInitial";

const EmbeddedExplorer: FunctionComponent = () => {
  return (
    <AladinOverlay space="var(--size-spacing-xs) var(--size-spacing-s) var(--size-spacing-xs) var(--size-spacing-xs)">
      <ControlStack position="top right">
        <ReturnToInital />
      </ControlStack>
      <ControlStack position="bottom left">
        <OpenCurrentView />
        <FullscreenToggle />
        <Share />
      </ControlStack>
      <ControlStack position="middle right">
        <Zoom />
      </ControlStack>
    </AladinOverlay>
  );
};

export default EmbeddedExplorer;
