import { useContext } from "react";
import classnames from "classnames";
import ExplorerContext from "@/contexts/Explorer";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Goals() {
  const { settings, setSettings } = useContext(ExplorerContext) || {};
  const { showGoals } = settings;

  const toggleGoals = () => {
    const { showGoals } = settings;

    setSettings({
      ...settings,
      showGoals: !showGoals,
    });
  };

  return (
    <Button
      icon={<IconComposer icon="Target" />}
      onClick={toggleGoals}
      text="Toggle Goals Menu"
      isIcon
      classes={classnames("goals-button", "control-button", {
        active: showGoals,
      })}
    />
  );
}
