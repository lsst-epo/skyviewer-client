import { useState } from "react";
import PropTypes from "prop-types";
import IconComposer from "@/svg/IconComposer";
import Button from "@/primitives/Button";
import Buttonish from "@/primitives/Buttonish";
import ShareButtons from "@/components/ShareButtons";
import Radio from "@/primitives/Radio";
import Menu from "@/primitives/Menu";
import AboutMenu from "./AboutMenu.js";
import LocaleMenu from "./LocaleMenu.js";
import ShareMenu from "./ShareMenu.js";
import QuickAccess from "./QuickAccess.js";

export default function MainMenu({ route }) {
  const [openOverride, setOpenOverride] = useState(false);
  const [localeOpenOverride, setLocaleOpenOverride] = useState(false);
  const [shareOpenOverride, setShareOpenOverride] = useState(false);
  const [aboutOpenOverride, setAboutOpenOverride] = useState(false);

  const toggleMainMenuCallback = (isOpen) => {
    setOpenOverride(isOpen);
  };

  const toggleLocaleModalCallback = (isOpen) => {
    setLocaleOpenOverride(isOpen);
  };

  const toggleShareModalCallback = (isOpen) => {
    setShareOpenOverride(isOpen);
  };

  const toggleAboutModalCallback = (isOpen) => {
    setAboutOpenOverride(isOpen);
  };

  function getQuickAccess() {
    return (
      <ul className="list-unstyled quick-access-nav-items">
        <li className="quick-access-nav-item">
          {route === "/explorer" ? (
            <Buttonish
              url="/tours"
              icon={<IconComposer icon="Suitcase" />}
              text="Astronomical Tours"
            />
          ) : (
            <Buttonish
              url="/explorer"
              icon={<IconComposer icon="Sparkle" />}
              text="Skyviewer Explorer"
            />
          )}
        </li>
      </ul>
    );
  }

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
        icon: <IconComposer icon="Hamburger" />,
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
            <ul className="list-unstyled main-menu-nav-items">
              <li className="main-menu-nav-item">
                <Button
                  isIcon={false}
                  icon={<IconComposer icon="World" />}
                  text="Language"
                  classes="language-item"
                  onClick={() => setLocaleOpenOverride(true)}
                />
                <LocaleMenu
                  isOpen={localeOpenOverride}
                  toggleMenuCallback={toggleLocaleModalCallback}
                />
              </li>
              <li className="main-menu-nav-item">
                <Button
                  isIcon={false}
                  icon={<IconComposer icon="ShareSimple" />}
                  text="Share Skyviewer"
                  classes="share-item"
                  onClick={() => setShareOpenOverride(true)}
                />
                <ShareMenu
                  isOpen={shareOpenOverride}
                  toggleMenuCallback={toggleShareModalCallback}
                />
              </li>
              <li className="main-menu-nav-item">
                <Buttonish
                  url="#"
                  icon={<IconComposer icon="Help" />}
                  text="Help"
                  classes="help-item"
                />
              </li>
              <li className="main-menu-nav-item">
                <Button
                  isIcon={false}
                  icon={<IconComposer icon="InfoSmall" />}
                  text="About"
                  classes="about-item"
                  onClick={() => setAboutOpenOverride(true)}
                />
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
