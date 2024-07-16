import PropTypes from "prop-types";
import copy from "copy-to-clipboard";
import IconComposer from "@/svg/IconComposer";
import ShareButton from "@/components/ShareButtons/ShareButton";

export default function CopyUrlButton({ showLabel }) {
  return (
    <ShareButton
      showLabel={showLabel}
      icon={<IconComposer icon="ShareCopyUrl" />}
      text="Get Url"
      network="url"
      onClick={() => {
        copy(window.location.href);
      }}
    />
  );
}

CopyUrlButton.propTypes = {
  showLabel: PropTypes.bool,
};
