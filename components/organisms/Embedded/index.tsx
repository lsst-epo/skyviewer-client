"use client";
import { FunctionComponent, useState } from "react";
import AladinOverlay from "@/components/primitives/AladinOverlay";
import FOVSize from "@/components/molecules/FOVSize";
import styles from "./styles.module.css";
import ControlsContainer from "@/components/molecules/Controls/Container";
import ReturnToTarget from "@/components/molecules/Controls/ReturnToTarget";
import ShareImage from "@/components/molecules/Controls/ShareImage";
import Download from "@/components/molecules/Controls/Download";
import Zoom from "@/components/molecules/Controls/Zoom";
import Orientation from "@/components/molecules/ExplorerControls/Orientation";

const EmbeddedExplorer: FunctionComponent = () => {
  const [fov, setFov] = useState<number>();

  return (
    <AladinOverlay>
      <ControlsContainer>
        <ReturnToTarget />
        <ShareImage />
        <Download />
        <Zoom />
      </ControlsContainer>
      <div className={styles.orientation}>
        <Orientation />
      </div>
      <FOVSize className={styles.fovSize} {...{ fov }} />
      {/* <FOVScale className={styles.fovSize} {...{ fov }} /> */}
    </AladinOverlay>
  );
};

export default EmbeddedExplorer;
