import { useContext } from "react";
import classnames from "classnames";
import ExplorerContext from "@/contexts/Explorer";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Landmarks() {
  const { settings, setSettings } = useContext(ExplorerContext) || {};
  const { showLandmarks } = settings;

  const toggleLandmarks = () => {
    const { showLandmarks } = settings;

    setSettings({
      ...settings,
      showLandmarks: !showLandmarks,
    });
  };

  return (
    <Button
      icon={<IconComposer icon="Pin" />}
      onClick={toggleLandmarks}
      text="Toggle Landmarks"
      isIcon
      classes={classnames("landmarks-button", "control-button", {
        active: showLandmarks,
      })}
    />
  );
}
