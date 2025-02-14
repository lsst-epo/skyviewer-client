"use client";
import { useState } from "react";
import defaultAladinOptions from "@/fixtures/defaultAladinOptions";
import Filters from "./Filters";
import Share from "./Share";
import Pan from "./Pan";
import Zoom from "../Controls/Zoom";
import IconToggle from "@/components/primitives/IconToggle";
import { useAladin } from "@/contexts/Aladin";
import AladinOverlay from "@/components/primitives/AladinOverlay";
import styles from "./styles.module.css";
import Orientation from "./Orientation";

export default function Controls() {
  const { aladin } = useAladin();
  const [gridEnabled, setGridEnabled] = useState<boolean>(
    !!defaultAladinOptions?.showFrame
  );
  const [markersEnabled, setMarkersEnabled] = useState<boolean>(true);
  const [landmarksEnabled, setLandmarksEnabled] = useState<boolean>(true);

  const handleGridToggle = () => {
    if (aladin) {
      aladin?.setCooGrid({ enabled: !gridEnabled });
      setGridEnabled((gridEnabled) => !gridEnabled);
    }
  };

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
    <AladinOverlay className="controls">
      <div className={styles.zoomContainer}>
        <Zoom />
      </div>
      <Pan />
      <ul
        role="menu"
        aria-label="Wayfinding"
        className="wayfinding controls-submenu"
      >
        <li role="menuitem">
          <IconToggle
            icon="Pin"
            isChecked={landmarksEnabled}
            onToggleCallback={handleLandmarksToggle}
          />
        </li>
      </ul>
      <Share />
      <ul
        role="menu"
        aria-label="Toggle overlays"
        className={styles.viewControls}
      >
        <li role="menuitem">
          <Orientation />
        </li>
        <li role="menuitem">
          <IconToggle
            icon="Globe"
            isChecked={markersEnabled}
            onToggleCallback={handleMarkerToggle}
          />
        </li>
        <li role="menuitem">
          <IconToggle
            icon="Grid"
            isChecked={gridEnabled}
            onToggleCallback={handleGridToggle}
          />
        </li>
      </ul>
      <ul
        role="menu"
        aria-label="Search and Filter"
        className="find controls-submenu"
      >
        <li role="menuitem">
          <Filters />
        </li>
      </ul>
    </AladinOverlay>
  );
}
