import { useEffect, useState } from "react";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Goals() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleGoals = () => setIsOpen(!isOpen);

  return (
    <Button
      icon={<IconComposer icon="Target" />}
      onClick={toggleGoals}
      text="Toggle Search"
      isIcon
      classes="goals-button control-button"
    />
  );
}
