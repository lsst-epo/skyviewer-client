import PropTypes from "prop-types";
import copy from "copy-to-clipboard";
import ShareButton from "@/components/ShareButton";

export default function CopyUrlButton({ icon, text, network, showLabel }) {
  return (
    <ShareButton
      showLabel={showLabel}
      icon={icon}
      text={text}
      network={network}
      onClick={() => {
        copy(window.location.href);
      }}
    />
  );
}

CopyUrlButton.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  network: PropTypes.string,
  showLabel: PropTypes.bool,
};