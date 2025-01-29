"use client";
import { FunctionComponent, useState } from "react";
import AladinCanvas from "@/components/primitives/AladinCanvas";
import AladinOverlay from "@/components/primitives/AladinOverlay";
import FOVSize from "@/components/molecules/FOVSize";
import styles from "./styles.module.css";
import ControlsContainer from "@/components/molecules/Controls/Container";
import ReturnToTarget from "@/components/molecules/Controls/ReturnToTarget";
import ShareImage from "@/components/molecules/Controls/ShareImage";
import Download from "@/components/molecules/Controls/Download";
import Zoom from "@/components/molecules/Controls/Zoom";

const EmbeddedExplorer: FunctionComponent = () => {
  const [fov, setFov] = useState<number>();

  return (
    <>
      <AladinOverlay>
        <ControlsContainer>
          <ReturnToTarget />
          <ShareImage />
          <Download />
          <Zoom />
        </ControlsContainer>
        <FOVSize className={styles.fovSize} {...{ fov }} />
        {/* <FOVScale className={styles.fovSize} {...{ fov }} /> */}
      </AladinOverlay>
      <AladinCanvas onZoomChanged={(fov) => setFov(fov)} showLogo={false} />
    </>
  );
};

export default EmbeddedExplorer;
