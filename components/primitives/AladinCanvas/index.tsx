import { FunctionComponent, useEffect } from "react";
import camelCase from "lodash/camelCase";
import { useAladin } from "@/contexts/Aladin";
import { AladinEventMap } from "@/types/aladin";
import styles from "./styles.module.css";
import { isAladinEvent } from "@/lib/aladin/helpers";

interface AladinCanvasProps {
  onObjectsSelected?: AladinEventMap["objectsSelected"];
  onObjectClicked?: AladinEventMap["objectClicked"];
  onObjectHovered?: AladinEventMap["objectHovered"];
  onObjectHoveredStop?: AladinEventMap["objectHoveredStop"];
  onFootprintClicked?: AladinEventMap["footprintClicked"];
  onFootprintHovered?: AladinEventMap["footprintHovered"];
  onPositionChanged?: AladinEventMap["positionChanged"];
  onZoomChanged?: AladinEventMap["zoomChanged"];
  onClick?: AladinEventMap["click"];
  onRightClickMove?: AladinEventMap["rightClickMove"];
  onMouseMove?: AladinEventMap["mouseMove"];
  onFullScreenToggled?: AladinEventMap["fullScreenToggled"];
  onCooFrameChanged?: AladinEventMap["cooFrameChanged"];
  onResizeChanged?: AladinEventMap["resizeChanged"];
  onProjectionChanged?: AladinEventMap["projectionChanged"];
  onLayerChanged?: AladinEventMap["layerChanged"];
}

const AladinCanvas: FunctionComponent<AladinCanvasProps> = ({ ...events }) => {
  const { setRef, ref, aladin } = useAladin();

  useEffect(() => {
    if (aladin) {
      Object.keys(events).forEach((eventKey) => {
        const eventHandler = events[eventKey];
        const aladinEventName = camelCase(eventKey.slice(2));

        if (isAladinEvent(aladinEventName)) {
          aladin.on(aladinEventName, eventHandler);
        }
      });
    }
  }, [aladin, events]);

  return (
    <div
      ref={setRef}
      // onClick={() => {
      //   ref.current?.focus();
      // }}
      // onFocus={() => {
      //   console.log("focused");
      // }}
      // onBlur={() => {
      //   console.log("unfocused");
      // }}
      className={styles["aladin-container"]}
      tabIndex={-1}
    />
  );
};

AladinCanvas.displayName = "Atomic.AladinCanvas";

export default AladinCanvas;
