import { useEffect, useContext, useState } from "react";
import classnames from "classnames";
import ExplorerContext from "@/contexts/Explorer";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Markers() {
  const { settings, setSettings } = useContext(ExplorerContext) || {};
  const { showCatalogs } = settings;

  const toggleMarkers = () => {
    const { showCatalogs } = settings;

    setSettings({
      ...settings,
      showCatalogs: !showCatalogs,
    });
  };

  return (
    <Button
      icon={<IconComposer icon="Globe" />}
      onClick={toggleMarkers}
      text="Toggle Markers"
      isIcon
      classes={classnames("markers-button control-button", {
        active: showCatalogs,
      })}
    />
  );
}
