"use client";
import { useState } from "react";
import { IoIosGlobe } from "react-icons/io";
import Filters from "./Filters";
import Share from "./Share";
import Pan from "./Pan";
import Zoom from "../Controls/Zoom";
import IconToggle from "@/components/atomic/IconToggle";
import { useAladin } from "@/contexts/Aladin";
import AladinOverlay from "@/components/atomic/AladinOverlay";
import styles from "./styles.module.css";
import Orientation from "./Orientation";
import IconComposer from "@/components/svg/IconComposer";
import ToggleGrid from "./ToggleGrid";
import ControlStack from "../Controls/Stack";

export default function Controls() {
  const { aladin } = useAladin();

  const [markersEnabled, setMarkersEnabled] = useState<boolean>(true);
  const [landmarksEnabled, setLandmarksEnabled] = useState<boolean>(true);

  const handleMarkerToggle = () => {
    if (aladin) {
      aladin.getOverlays().forEach((catalog) => {
        markersEnabled ? catalog.hide() : catalog.show();
      });

      const landmarks = !markersEnabled;

      setMarkersEnabled((markersEnabled) => !markersEnabled);
      setLandmarksEnabled(landmarks);
    }
  };

  const handleLandmarksToggle = () => {
    if (aladin) {
      const landmarks = aladin.getOverlays().find(({ name }) => {
        return name === "landmark";
      });

      if (!landmarks) return;

      landmarksEnabled ? landmarks.hide() : landmarks.show();

      setLandmarksEnabled((landmarksEnabled) => !landmarksEnabled);
    }
  };

  return (
    <AladinOverlay
      className="controls"
      space="var(--size-spacing-xs) var(--size-spacing-s) var(--size-spacing-xs) var(--size-spacing-xs)"
    >
      <ControlStack position="middle right">
        <Zoom />
      </ControlStack>
      <Pan />

      <ControlStack position="middle left">
        <IconToggle
          icon={<IconComposer icon="Pin" />}
          isChecked={landmarksEnabled}
          onToggleCallback={handleLandmarksToggle}
        />
      </ControlStack>
      <ControlStack position="bottom left">
        <Share />
      </ControlStack>
      <ControlStack className={styles.viewControls} position="top right">
        <Orientation />
        <IconToggle
          icon={<IoIosGlobe />}
          isChecked={markersEnabled}
          onToggleCallback={handleMarkerToggle}
        />
        <ToggleGrid />
      </ControlStack>
      <ControlStack position="top left">
        <Filters />
      </ControlStack>
    </AladinOverlay>
  );
}
