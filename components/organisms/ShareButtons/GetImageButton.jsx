"use client";
import PropTypes from "prop-types";
import { saveAs } from "file-saver";
import { useAladin } from "@/contexts/Aladin";
import IconComposer from "@/components/svg/IconComposer";
import ShareButton from "./ShareButton";

export default function GetImageButton({ showLabel }) {
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
      showLabel={showLabel}
      icon={<IconComposer icon="ArrowUpFromBracket" />}
      text="Get Image"
      network="image"
      onClick={handleClick}
    />
  );
}

GetImageButton.propTypes = {
  showLabel: PropTypes.bool,
};
