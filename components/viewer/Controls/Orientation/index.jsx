import { useState } from "react";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Orientation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIndicator = () => setIsOpen(!isOpen);

  return (
    <Button
      icon={<IconComposer icon="Compass" />}
      onClick={toggleIndicator}
      text="Toggle Orientation Indicator"
      isIcon
      classes="control-button orientation-indicator"
    />
  );
}
