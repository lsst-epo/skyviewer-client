"use client";
import { FC, useState } from "react";
import IconToggle from "@/components/atomic/IconToggle";
import IconComposer from "@/components/svg/IconComposer";
import { useAladin } from "@/contexts/Aladin";

const ToggleGrid: FC = () => {
  const { aladin, isLoading } = useAladin();
  const [gridEnabled, setGridEnabled] = useState<boolean>(
    !!aladin?.view.gridCfg.enabled
  );

  const handleGridToggle = () => {
    if (aladin) {
      aladin.setCooGrid({ enabled: !gridEnabled });
      setGridEnabled((gridEnabled) => !gridEnabled);
    }
  };

  return (
    <IconToggle
      disabled={isLoading}
      icon={<IconComposer icon="Grid" />}
      isChecked={gridEnabled}
      onToggleCallback={handleGridToggle}
    />
  );
};

ToggleGrid.displayName = "Molecule.ExplorerControl.ToggleGrid";

export default ToggleGrid;
