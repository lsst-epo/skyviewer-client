import { useContext } from "react";
import PropTypes from "prop-types";
import copy from "copy-to-clipboard";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import ShareButton from "./ShareButton.js";
import { getDownloadLink } from "@/helpers";

export default function GetImageButton({ icon, text, network }) {
  const { aladin } = useContext(AladinGlobalContext) || {};

  return (
    <ShareButton
      icon={icon}
      text={text}
      network={network}
      onClick={() => {
        getDownloadLink(aladin.getViewDataURL(), "sky image");
      }}
    />
  );
}

GetImageButton.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  network: PropTypes.string,
};
