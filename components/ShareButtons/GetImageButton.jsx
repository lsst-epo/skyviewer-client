import { useContext } from "react";
import PropTypes from "prop-types";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import IconComposer from "@/svg/IconComposer";
import ShareButton from "@/components/ShareButtons/ShareButton";
import { getDownloadLink } from "@/helpers";

export default function GetImageButton({ showLabel }) {
  const { aladin } = useContext(AladinGlobalContext) || {};

  return (
    <ShareButton
      showLabel={showLabel}
      icon={<IconComposer icon="ArrowUpFromBracket" />}
      text="Get Image"
      network="image"
      onClick={() => {
        getDownloadLink(aladin.getViewDataURL(), "sky image");
      }}
    />
  );
}

GetImageButton.propTypes = {
  showLabel: PropTypes.bool,
};
