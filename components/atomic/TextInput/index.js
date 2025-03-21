import PropTypes from "prop-types";
import classnames from "clsx";

export default function TextInput({
  id,
  labelledbyId,
  name,
  label,
  placeholder,
  className,
  hideLabel,
  handleFocus,
  handleChange,
  handleBlur,
}) {
  return (
    <div className="text-input-container">
      <label
        id={labelledbyId}
        className={classnames("text-input-label", {
          "screen-reader-only": hideLabel,
        })}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name || id}
        className={className}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelledbyId: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  hideLabel: PropTypes.bool,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
};
