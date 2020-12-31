import { useEffect, useState } from "react";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Markers() {
  const [isMarkers, setIsMarkers] = useState(false);
  const toggleMarkers = () => setIsMarkers(!isMarkers);

  return (
    <Button
      icon={<IconComposer icon="Globe" />}
      onClick={toggleMarkers}
      text="Toggle Markers"
      isIcon
      classes="markers-button control-button"
    />
  );
}
