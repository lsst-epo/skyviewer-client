import { useContext } from "react";
import { useAladin } from "@/contexts/Aladin";
import AladinFocusContext from "@/contexts/AladinFocus";
import { useKeyDownEvent } from "@/hooks/listeners";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Zoom() {
  const { aladin } = useAladin();
  const { hasFocus } = useContext(AladinFocusContext) || {};

  const handleZoomIn = () => {
    aladin.increaseZoom(1);
  };

  const handleZoomOut = () => {
    aladin.decreaseZoom(1);
  };

  function handleKeyDown(event) {
    const { key } = event;

    if (key !== "+" && key !== "=" && key !== "-" && key !== "_") return;

    if (key === "+" || key === "=") {
      handleZoomIn();
    } else if (key === "-" || key === "_") {
      handleZoomOut();
    }
  }

  useKeyDownEvent(hasFocus ? handleKeyDown : null);

  return (
    <div className="zooms controls-submenu">
      <Button
        icon={<IconComposer icon="Plus" />}
        onClick={handleZoomIn}
        text="Zoom In"
        isIcon
        classes="zoom-in control-button"
      />
      <Button
        icon={<IconComposer icon="Minus" />}
        onClick={handleZoomOut}
        text="Zoom Out"
        isIcon
        classes="zoom-out control-button"
      />
    </div>
  );
}
