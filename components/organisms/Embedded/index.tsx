"use client";
import { FunctionComponent } from "react";
import AladinOverlay from "@/components/atomic/AladinOverlay";
import Zoom from "@/components/molecules/Controls/Zoom";
import ControlStack from "@/components/molecules/Controls/Stack";
import ReturnToInital from "@/components/molecules/ExplorerControls/ReturnToInitial";
import ViewScale from "@/components/molecules/ExplorerControls/ViewScale";
import useAladinKeyboardControls from "@/hooks/useAladinKeyboardControls";
import Search from "@/components/molecules/ExplorerControls/Search";
import styles from "./styles.module.css";
import ContextualActions from "@/components/molecules/ExplorerControls/ContextualActions";

const EmbeddedExplorer: FunctionComponent = () => {
  useAladinKeyboardControls();

  return (
    <AladinOverlay
      className={styles.overlay}
      space="var(--size-spacing-xs) var(--size-spacing-s) var(--size-spacing-xs) var(--size-spacing-xs)"
    >
      <div className={styles.nonViewScale}>
        <ControlStack position="top left">
          <Search className={styles.search} />
        </ControlStack>
        <ControlStack position="top right">
          <ReturnToInital />
        </ControlStack>
        <ControlStack position="bottom left">
          <ContextualActions
            showOpenToursAction
            showOpenCurrentViewAction
            showFullscreenAction
            showShareAction
          />
        </ControlStack>
        <ControlStack position="middle right">
          <Zoom />
        </ControlStack>
      </div>
      <div className={styles.viewScale}>
        <ViewScale />
      </div>
    </AladinOverlay>
  );
};

export default EmbeddedExplorer;
