import { useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { capitalize } from "@/helpers";

export default function Checkbox({
  label,
  checked,
  toggleCallback,
  labelledbyId,
  describedbyId,
  classes,
  defaultChecked,
}) {
  const checkboxRef = useRef(null);

  function handleChange(e) {
    if (toggleCallback) toggleCallback(checkboxRef.current.checked, label);
  }

  return (
    <>
      {typeof defaultChecked === "boolean" && typeof checked === "undefined" && (
        <label className="checkbox-wrapper">
          <input
            ref={checkboxRef}
            type="checkbox"
            defaultChecked={defaultChecked}
            onChange={handleChange}
            className={classnames("checkbox", classes)}
          />
          <div className="checkbox-indicator"></div>
          <div className="checkbox-label">{capitalize(label)}</div>
        </label>
      )}
      {typeof defaultChecked === "undefined" && typeof checked === "boolean" && (
        <label className="checkbox-wrapper">
          <input
            ref={checkboxRef}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            className={classnames("checkbox", classes)}
          />
          <div className="checkbox-indicator"></div>
          <div className="checkbox-label">{capitalize(label)}</div>
        </label>
      )}
    </>
  );
}

// Checkbox.defaultProps = {
// };

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.string,
  labelledbyId: PropTypes.string,
  describedbyId: PropTypes.string,
  toggleCallback: PropTypes.func,
  classes: PropTypes.string,
};
