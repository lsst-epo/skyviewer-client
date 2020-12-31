import PropTypes from "prop-types";
import classnames from "classnames";

export default function Button({ icon, text, onClick, isIcon, classes }) {
  return (
    <button
      onClick={onClick}
      className={classnames("button", {
        "icon-button": isIcon,
        [classes]: classes,
      })}
    >
      {icon}
      <span
        className={classnames({
          "screen-reader-only": isIcon,
        })}
      >
        {text}
      </span>
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isIcon: PropTypes.bool,
  classes: PropTypes.string,
};
