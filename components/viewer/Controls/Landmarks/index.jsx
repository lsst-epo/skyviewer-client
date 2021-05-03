import { useState } from "react";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Landmarks() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleLandmarks = () => setIsOpen(!isOpen);

  return (
    <Button
      icon={<IconComposer icon="Pin" />}
      onClick={toggleLandmarks}
      text="Toggle Landmarks"
      isIcon
      classes="landmarks-button control-button"
    />
  );
}
