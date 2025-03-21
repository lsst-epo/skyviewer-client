import { useRef } from "react";
import classnames from "clsx";
import PropTypes from "prop-types";
import { capitalize } from "@/helpers";

export default function Radio({
  id,
  label,
  checked,
  toggleCallback,
  classes,
  defaultChecked,
}) {
  const radioRef = useRef(null);

  function handleChange(e) {
    if (toggleCallback) toggleCallback(radioRef.current.checked, label, id);
  }

  return (
    <label className="radio-wrapper">
      <input
        ref={radioRef}
        type="radio"
        checked={checked}
        onChange={handleChange}
        className={classnames("radio", classes)}
      />
      <div className="radio-indicator"></div>
      <div className="radio-label">{capitalize(label)}</div>
    </label>
  );
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.string,
  toggleCallback: PropTypes.func,
  classes: PropTypes.string,
};
