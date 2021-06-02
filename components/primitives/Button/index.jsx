import PropTypes from "prop-types";
import classnames from "classnames";

export default function Button({
  icon,
  text,
  onClick,
  isIcon,
  iconText,
  classes,
}) {
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={classnames({
        button: !isIcon && !iconText,
        "icon-button": isIcon && !iconText,
        "icon-text-button": iconText,
        [classes]: classes,
      })}
    >
      {icon}
      <span
        className={classnames({
          "icon-text": iconText,
        })}
      >
        {iconText}
      </span>
      <span
        className={classnames({
          "screen-reader-only": isIcon || iconText,
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
  onClick: PropTypes.func,
  isIcon: PropTypes.bool,
  iconText: PropTypes.string,
  classes: PropTypes.string,
};
