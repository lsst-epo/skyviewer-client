import PropTypes from "prop-types";
import { useAladin } from "@/contexts/Aladin";
import IconComposer from "@/components/svg/IconComposer";
import ShareButton from "@/components/ShareButtons/ShareButton";
import { getDownloadLink } from "@/helpers";

export default function GetImageButton({ showLabel }) {
  const { aladin } = useAladin();

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
