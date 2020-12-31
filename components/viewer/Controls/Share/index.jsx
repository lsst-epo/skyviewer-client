import { useEffect, useState } from "react";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Share() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleShare = () => setIsOpen(!isOpen);

  return (
    <Button
      icon={<IconComposer icon="Share" />}
      onClick={toggleShare}
      text="Toggle Share"
      isIcon
      classes="share-button control-button"
    />
  );
}
