import classnames from "classnames";
import { useExplorerSettings } from "@/contexts/Explorer";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Grid() {
  const { settings, setSettings } = useExplorerSettings();
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
