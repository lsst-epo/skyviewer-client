import { useEffect, useState, useContext } from "react";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import classnames from "classnames";

export default function Grid() {
  const { aladin } = useContext(AladinGlobalContext) || {};
  const [isGrid, setIsGrid] = useState(false);
  const toggleGrid = () => {
    aladin.showHealpixGrid(!isGrid);
    setIsGrid(!isGrid);
  };

  const classes = classnames("grid-button", "control-button", {
    active: isGrid,
  });

  return (
    <Button
      icon={<IconComposer icon="Grid" />}
      onClick={toggleGrid}
      text="Toggle Grid"
      isIcon
      classes={classes}
    />
  );
}
