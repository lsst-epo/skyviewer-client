import { useContext } from "react";
import classnames from "classnames";
import ExplorerContext from "@/contexts/Explorer";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Grid() {
  const { settings, setSettings } = useContext(ExplorerContext) || {};
  const { showGrid } = settings;
  const toggleGrid = () => {
    const { showGrid } = settings;

    setSettings({
      ...settings,
      showGrid: !showGrid,
    });
  };

  return (
    <Button
      icon={<IconComposer icon="Grid" />}
      onClick={toggleGrid}
      text="Toggle Grid"
      isIcon
      classes={classnames("grid-button", "control-button", {
        active: showGrid,
      })}
    />
  );
}
