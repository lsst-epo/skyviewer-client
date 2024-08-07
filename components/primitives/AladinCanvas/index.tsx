import { FunctionComponent, useEffect } from "react";
import camelCase from "lodash/camelCase";
import { useAladin } from "@/contexts/Aladin";
import { AladinEventMap } from "@/types/aladin";
import { isAladinEvent } from "@/lib/aladin/helpers";
import "./styles.css";

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
  className?: string;
}

const AladinCanvas: FunctionComponent<AladinCanvasProps> = ({
  className,
  ...events
}) => {
  const { setRef, aladin } = useAladin();

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

  return <div ref={setRef} className={className} tabIndex={-1} />;
};

AladinCanvas.displayName = "Atomic.AladinCanvas";

export default AladinCanvas;
