"use client";
import { FC } from "react";
import { MdOpenInNew } from "react-icons/md";
import IconButton from "@/components/atomic/IconButton";
import { useAladin } from "@/contexts/Aladin";
import { currentViewAsParams } from "@/lib/aladin/helpers";
import { useTranslation } from "react-i18next";

interface OpenCurrentViewProps {
  className?: string;
}

const OpenCurrentView: FC<OpenCurrentViewProps> = ({ className }) => {
  const { aladin, isLoading } = useAladin();
  const { t } = useTranslation();

  const handleOpen = () => {
    if (!isLoading) {
      const { origin } = window.location;
      const url = `${origin}/explorer?${currentViewAsParams(
        aladin
      ).toString()}`;

      window.open(url, "_blank");
    }
  };

  return (
    <IconButton
      className={className}
      onClick={handleOpen}
      disabled={isLoading}
      icon={<MdOpenInNew />}
      text={t("controls.open_in_new_tab")}
    />
  );
};

OpenCurrentView.displayName = "Molecule.ExplorerControl.OpenCurrentView";

export default OpenCurrentView;
