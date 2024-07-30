import classnames from "classnames";
import { useExplorerSettings } from "@/contexts/Explorer";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Markers() {
  const { settings, setSettings } = useExplorerSettings();
  const { showCatalogs } = settings;

  const toggleMarkers = () => {
    const { showCatalogs, showLandmarks } = settings;
    const visibility = !showCatalogs;

    setSettings({
      ...settings,
      showCatalogs: visibility,
      showLandmarks: visibility,
    });
  };

  return (
    <Button
      icon={<IconComposer icon="Globe" />}
      onClick={toggleMarkers}
      text="Toggle Markers"
      isIcon
      classes={classnames("markers-button", "control-button", {
        active: showCatalogs,
      })}
    />
  );
}
