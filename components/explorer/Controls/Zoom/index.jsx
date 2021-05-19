import { useContext } from "react";
import ExplorerContext from "@/contexts/Explorer";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import { useKeyDownEvent } from "@/hooks/listeners";
import IconComposer from "@/svg/IconComposer";
import { Range, Direction } from "react-range";

const STEP = 0.1;

export default function Zoom() {
  const { settings } = useContext(ExplorerContext) || {};
  const { aladin } = useContext(AladinGlobalContext) || {};
  const { zoomLevel, zoomRange } = settings;
  const [min, max] = zoomRange;

  function getZoomInLevel(zoom, step) {
    const newZoomLevel = zoom - step;
    if (newZoomLevel < min) return min;
    return newZoomLevel;
  }

  function getZoomOutLevel(zoom, step) {
    const newZoomLevel = zoom + step;
    if (newZoomLevel > max) return max;
    return newZoomLevel;
  }

  const handleZoom = (values) => {
    aladin.setZoom(Number(values[0]).toFixed(1));
  };

  function handleKeyDown(event) {
    const { key } = event;

    if (key !== "+" && key !== "=" && key !== "-" && key !== "_") return;

    const bigStep = STEP * 100;

    if (key === "+" || key === "=") {
      handleZoom([getZoomInLevel(+zoomLevel, bigStep)]);
    } else if (key === "-" || key === "_") {
      handleZoom([getZoomOutLevel(+zoomLevel, bigStep)]);
    }
  }

  useKeyDownEvent(handleKeyDown);

  return (
    <div className="zooms controls-submenu">
      <IconComposer icon="Plus" className="zoom-in" />
      <Range
        step={0.1}
        min={min}
        max={max}
        direction={Direction.Down}
        values={[zoomLevel]}
        onChange={handleZoom}
        renderTrack={({ props, children }) => (
          <div {...props} className="zoom-track">
            {children}
          </div>
        )}
        renderThumb={({ props, children }) => (
          <div {...props} className="zoom-thumb" />
        )}
      />
      <IconComposer icon="Minus" className="zoom-out" />
    </div>
  );
}
