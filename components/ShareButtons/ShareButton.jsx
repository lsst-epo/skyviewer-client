import PropTypes from "prop-types";
import classnames from "classnames";

export default function ShareButton({
  icon,
  text,
  network,
  onClick,
  message,
  description,
  showLabel,
}) {
  return (
    <button
      onClick={onClick}
      className="share-button st-custom-button"
      data-network={network}
      data-message={message}
      data-description={description}
    >
      <div className={classnames("share-icon", network)}>{icon}</div>
      <div
        className={classnames("share-network", {
          "screen-reader-only": !showLabel,
        })}
      >
        {text}
      </div>
    </button>
  );
}

ShareButton.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  network: PropTypes.string,
  message: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  showLabel: PropTypes.bool,
};
