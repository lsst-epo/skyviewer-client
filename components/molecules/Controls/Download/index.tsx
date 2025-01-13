"use client";
import classNames from "classnames";
import { FunctionComponent } from "react";
import { saveAs } from "file-saver";
import IconButton from "@/components/primitives/IconButton";
import { useAladin } from "@/contexts/Aladin";
import { useTranslation } from "react-i18next";

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
      className={classNames(className)}
      icon="FloppyDisk"
      onClick={handleClick}
      disabled={isLoading}
    />
  );
};

Download.displayName = "Molecule.Control.Download";

export default Download;
