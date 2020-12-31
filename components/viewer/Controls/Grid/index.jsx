import { useEffect, useState } from "react";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Grid() {
  const [isGrid, setIsGrid] = useState(false);
  const toggleGrid = () => setIsGrid(!isGrid);

  return (
    <Button
      icon={<IconComposer icon="Grid" />}
      onClick={toggleGrid}
      text="Toggle Grid"
      isIcon
      classes="grid-button control-button"
    />
  );
}
