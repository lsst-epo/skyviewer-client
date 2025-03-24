"use client";
import { useState } from "react";
import PropTypes from "prop-types";
import IconComposer from "@/components/svg/IconComposer";
import Button from "@rubin-epo/epo-react-lib/Button";
import Buttonish from "@rubin-epo/epo-react-lib/Buttonish";
import Menu from "@/components/atomic/Menu";
import AboutMenu from "./AboutMenu.js";
import LocaleMenu from "./LocaleMenu.js";
import QuickAccess from "./QuickAccess.js";

export default function MainMenu({ route }) {
  const [openOverride, setOpenOverride] = useState(false);
  const [localeOpenOverride, setLocaleOpenOverride] = useState(false);
  const [aboutOpenOverride, setAboutOpenOverride] = useState(false);

  const toggleMainMenuCallback = (isOpen) => {
    setOpenOverride(isOpen);
  };

  const toggleLocaleModalCallback = (isOpen) => {
    setLocaleOpenOverride(isOpen);
  };

  const toggleAboutModalCallback = (isOpen) => {
    setAboutOpenOverride(isOpen);
  };

  return (
    <Menu
      classes="main-menu"
      labelledbyId="main-menu-modal-label"
      describedbyId="main-menu-modal-description"
      heading="Main Menu"
      subheading="Settings and more"
      openCallback={toggleMainMenuCallback}
      closeCallback={toggleMainMenuCallback}
      openOverride={openOverride}
      openButtonOpts={{
        icon: <IconComposer size={22} icon="Hamburger" />,
        text: "Open Main Menu Modal Dialog",
        isIcon: true,
        classes: "main-menu-button",
      }}
    >
      <div className="main-menu-content-wrapper">
        <div className="menu-section">
          <nav aria-labelledby="settings-label" className="main-menu-nav">
            <h3 id="settings-label" className="menu-section-heading">
              Settings
            </h3>
            <ul className="main-menu-nav-items">
              <li className="main-menu-nav-item">
                <Button
                  icon="Globe"
                  className="language-item"
                  onClick={() => setLocaleOpenOverride(true)}
                >
                  Language
                </Button>
                <LocaleMenu
                  isOpen={localeOpenOverride}
                  toggleMenuCallback={toggleLocaleModalCallback}
                />
              </li>
              <li className="main-menu-nav-item">
                <Buttonish
                  url="#"
                  icon="QuestionCircle"
                  text="Help"
                  className="help-item"
                />
              </li>
              <li className="main-menu-nav-item">
                <Button
                  icon="InfoCircle"
                  className="about-item"
                  onClick={() => setAboutOpenOverride(true)}
                >
                  About
                </Button>
                <AboutMenu
                  isOpen={aboutOpenOverride}
                  toggleMenuCallback={toggleAboutModalCallback}
                />
              </li>
            </ul>
          </nav>
        </div>
        <div className="menu-section">
          <QuickAccess route={route} />
        </div>
      </div>
    </Menu>
  );
}

MainMenu.displayName = "Global.MainMenu";

MainMenu.propTypes = {
  route: PropTypes.string,
};
