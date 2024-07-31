import { FunctionComponent, useEffect } from "react";
import camelCase from "lodash/camelCase";
import { useAladin } from "@/contexts/Aladin";
import { AladinEvent, AladinEventHandler } from "@/types/aladin";
import styles from "./styles.module.css";
import { isAladinEvent } from "@/lib/aladin/helpers";

interface AladinCanvasProps {
  onObjectsSelected?: AladinEventHandler;
  onObjectClicked?: AladinEventHandler;
  onObjectHovered?: AladinEventHandler;
  onObjectHoveredStop?: AladinEventHandler;
  onFootprintClicked?: AladinEventHandler;
  onFootprintHovered?: AladinEventHandler;
  onPositionChanged?: AladinEventHandler;
  onZoomChanged?: AladinEventHandler;
  onClick?: AladinEventHandler;
  onRightClickMove?: AladinEventHandler;
  onMouseMove?: AladinEventHandler;
  onFullScreenToggled?: AladinEventHandler;
  onCooFrameChanged?: AladinEventHandler;
  onResizeChanged?: AladinEventHandler;
  onProjectionChanged?: AladinEventHandler;
  onLayerChanged?: AladinEventHandler;
}

const AladinCanvas: FunctionComponent<AladinCanvasProps> = ({ ...events }) => {
  const { ref, aladin } = useAladin();

  useEffect(() => {
    if (aladin) {
      Object.keys(events).forEach((eventKey) => {
        const eventHandler: AladinEventHandler = events[eventKey];
        const aladinEventName = camelCase(eventKey.slice(2));

        if (isAladinEvent(aladinEventName)) {
          aladin.on(aladinEventName, eventHandler);
        }
      });
    }
  }, [aladin, events]);

  return <div ref={ref} className={styles["aladin-container"]} />;
};

AladinCanvas.displayName = "Atomic.AladinCanvas";

export default AladinCanvas;
