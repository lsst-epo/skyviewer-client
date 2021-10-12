import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@/primitives/Button";
import Menu from "@/primitives/Menu";
import Radio from "@/primitives/Radio";

const DEFAULT = "en";

export default function LocaleMenu({ toggleMenuCallback, isOpen }) {
  const [locale, setLocale] = useState(DEFAULT);

  const handleLocaleSelect = (checked, name, locale) => {
    setLocale(locale);
  };

  return (
    <Menu
      classes="main-menu locale-menu"
      labelledbyId="locale-menu-modal-label"
      describedbyId="locale-menu-modal-description"
      heading="Language Selection"
      subheading="Choose your language"
      openCallback={toggleMenuCallback}
      closeCallback={toggleMenuCallback}
      openOverride={isOpen}
    >
      <div className="main-menu-content-wrapper">
        <div className="menu-section">
          <div className="checkboxes">
            <Radio
              id="en"
              label="English"
              name="en"
              checked={locale === "en"}
              toggleCallback={handleLocaleSelect}
            />
            <Radio
              id="es"
              label="Español"
              name="es"
              checked={locale === "es"}
              toggleCallback={handleLocaleSelect}
            />
          </div>
        </div>
        <div className="buttons-wrapper">
          <Button
            classes="apply-locale-button"
            text="Apply Selection"
            onClick={() => toggleMenuCallback(false)}
          />
          <Button
            classes="reset-locale-button"
            text="Reset to Default"
            onClick={locale !== DEFAULT ? () => setLocale(DEFAULT) : null}
          />
        </div>
      </div>
    </Menu>
  );
}

LocaleMenu.propTypes = {
  toggleMenuCallback: PropTypes.func,
  isOpen: PropTypes.bool,
};
