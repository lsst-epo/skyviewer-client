"use client";
import PropTypes from "prop-types";
import { saveAs } from "file-saver";
import { useAladin } from "@/contexts/Aladin";
import IconComposer from "@/components/svg/IconComposer";
import ShareButton from "..";
import { forwardRef } from "react";

interface GetImageProps {
  showLabel?: boolean;
}

const GetImageButton = forwardRef<HTMLButtonElement, GetImageProps>(
  ({ showLabel }, ref) => {
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
      <ShareButton
        ref={ref}
        showLabel={showLabel}
        icon={<IconComposer icon="ArrowUpFromBracket" />}
        text="Get Image"
        network="image"
        onClick={handleClick}
      />
    );
  }
);

GetImageButton.displayName = "Molecule.DownloadImage";

GetImageButton.propTypes = {
  showLabel: PropTypes.bool,
};

export default GetImageButton;
