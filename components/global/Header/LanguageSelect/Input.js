import PropTypes from "prop-types";
import localeShape from "@/shapes/locale";

export default function Input({ value, label, id, checked, onChange }) {
  return (
    <label htmlFor={id} className="c-language-select__label">
      <input
        type="radio"
        name="languageSelect"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        className="c-language-select__input"
      />
      <span className="c-language-select__text">{label}</span>
    </label>
  );
}

Input.displayName = "Global.LanguageToggle.Input";

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
