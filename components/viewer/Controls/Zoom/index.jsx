import { useEffect, useState } from "react";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Zoom() {
  // eslint-disable-next-line no-console
  const zoomIn = () => console.log("In");
  // eslint-disable-next-line no-console
  const zoomOut = () => console.log("Out");

  return (
    <div className="zoom-controls">
      <Button
        icon={<IconComposer icon="Plus" />}
        onClick={zoomIn}
        text="Zoom In"
        isIcon
        classes="zoom-in-button control-button"
      />
      <Button
        icon={<IconComposer icon="Minus" />}
        onClick={zoomOut}
        text="Zoom Out"
        isIcon
        classes="zoom-out-button control-button"
      />
    </div>
  );
}
