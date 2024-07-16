import { useContext } from "react";
import ExplorerContext from "@/contexts/Explorer";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import AladinFocusContext from "@/contexts/AladinFocus";
import { useKeyDownEvent } from "@/hooks/listeners";
import { getKeyByValue } from "@/helpers";
import Button from "@/primitives/Button";

const KEY_MAP = {
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
};

export default function Pan() {
  const { settings } = useContext(ExplorerContext) || {};
  const { hasFocus } = useContext(AladinFocusContext) || {};
  const { aladin } = useContext(AladinGlobalContext) || {};

  const goTo = (direction) => {
    const [width, height] = aladin.getSize();
    const [ra, dec] = aladin.getRaDec();
    const [x, y] = aladin.world2pix(ra, dec);
    const diffX = width / 2.5;
    const diffY = height / 2.5;
    let newX = x;
    let newY = y;

    if (direction === "left") newX = x - diffX;
    if (direction === "up") newY = y - diffY;
    if (direction === "right") newX = x + diffX;
    if (direction === "down") newY = y + diffY;

    const [newRa, newDec] = aladin.pix2world(newX, newY);

    if (!newRa || !newDec) return;

    aladin.animateToRaDec(newRa, newDec, 0.5);
  };

  function handleKeyDown(event) {
    const { key } = event;
    const direction = getKeyByValue(KEY_MAP, key);

    if (!direction) return;

    goTo(direction);
  }

  useKeyDownEvent(hasFocus ? handleKeyDown : null);

  return (
    <ul
      className="pan controls-submenu screen-reader-only"
      role="menu"
      aria-label="Pan"
    >
      <li role="menuitem">
        <Button
          icon={<div className="arrow-icon">&larr;</div>}
          onClick={() => {
            goTo("left");
          }}
          text="Pan Left"
          isIcon
          classes={"direction-button left-button control-button"}
        />
      </li>
      <li role="menuitem">
        <Button
          icon={<div className="arrow-icon">&uarr;</div>}
          onClick={() => {
            goTo("up");
          }}
          text="Pan Up"
          isIcon
          classes={"direction-button up-button control-button"}
        />
      </li>
      <li role="menuitem">
        <Button
          icon={<div className="arrow-icon">&rarr;</div>}
          onClick={() => {
            goTo("right");
          }}
          text="Pan Right"
          isIcon
          classes={"direction-button right-button control-button"}
        />
      </li>
      <li role="menuitem">
        <Button
          icon={<div className="arrow-icon">&darr;</div>}
          onClick={() => {
            goTo("down");
          }}
          text="Pan Down"
          isIcon
          classes={"direction-button down-button control-button"}
        />
      </li>
    </ul>
  );
}
