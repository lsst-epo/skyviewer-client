"use client";
import { FunctionComponent } from "react";
import { saveAs } from "file-saver";
import IconButton from "@/components/primitives/IconButton";
import { useAladin } from "@/contexts/Aladin";
import { useTranslation } from "react-i18next";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";

interface DownloadProps {
  className?: string;
}

const Download: FunctionComponent<DownloadProps> = ({ className }) => {
  const { t } = useTranslation();
  const { aladin, isLoading } = useAladin();

  const handleClick = async () => {
    if (!isLoading) {
      const dataUrl = await aladin?.getViewData("blob", "image/png", false);

      if (dataUrl) {
        saveAs(dataUrl);
      }
    }
  };

  return (
    <IconButton
      text={t("controls.save_image")}
      className={className}
      icon={<IconComposer icon="FloppyDisk" />}
      onClick={handleClick}
      disabled={isLoading}
    />
  );
};

Download.displayName = "Molecule.Control.Download";

export default Download;
