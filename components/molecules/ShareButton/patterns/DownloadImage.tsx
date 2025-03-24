"use client";
import PropTypes from "prop-types";
import { saveAs } from "file-saver";
import { TfiDownload } from "react-icons/tfi";

import { useAladin } from "@/contexts/Aladin";
import ShareButton from "..";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import WithButtonLabel from "@/components/atomic/WithButtonLabel";

interface GetImageProps {
  showLabel?: boolean;
}

const GetImageButton = forwardRef<HTMLButtonElement, GetImageProps>(
  ({ showLabel }, ref) => {
    const { aladin, isLoading } = useAladin();
    const { t } = useTranslation();
    const label = t("menu.share.options.image");

    const handleClick = async () => {
      if (!isLoading) {
        const dataUrl = await aladin?.getViewData("blob", "image/png", false);

        if (dataUrl) {
          saveAs(dataUrl);
        }
      }
    };
    return (
      <WithButtonLabel label={label} showLabel={showLabel}>
        <ShareButton
          icon={<TfiDownload />}
          text={t("menu.share.options.image")}
          network="image"
          onClick={handleClick}
        />
      </WithButtonLabel>
    );
  }
);

GetImageButton.displayName = "Molecule.DownloadImage";

GetImageButton.propTypes = {
  showLabel: PropTypes.bool,
};

export default GetImageButton;
