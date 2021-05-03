import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Button from "@/primitives/Button";
import Buttonish from "@/primitives/Buttonish";
import Menu from "@/primitives/Menu";
import IconComposer from "@/svg/IconComposer";

export default function MainMenu({ route }) {
  const modalLabelId = "main-menu-modal-label";
  const modalDescriptionId = "main-menu-modal-description";
  const { route: currentRoute } = useRouter();
  const [openOverride, setOpenOverride] = useState(false);

  const toggleCallback = (isOpen) => {
    setOpenOverride(isOpen);
  };

  function getQuickAccess() {
    return (
      <ul className="list-unstyled quick-access-nav-items">
        <li className="quick-access-nav-item">
          {currentRoute.includes(route) ? (
            <Button
              onClick={() => {
                setOpenOverride(false);
              }}
              icon={<IconComposer icon="Sparkle" />}
              text="Skyviewer Explorer"
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
      labelledbyId={modalLabelId}
      describedbyId={modalDescriptionId}
      heading="Main Menu"
      subheading="Settings and more"
      openCallback={toggleCallback}
      closeCallback={toggleCallback}
      openOverride={openOverride}
      openButtonOpts={{
        icon: <IconComposer icon="Hamburger" />,
        text: "Open Main Menu Modal Dialog",
        isIcon: true,
        classes: "main-menu-button",
      }}
    >
      <>
        <div className="menu-section">
          <nav aria-labelledby="settings-label" className="main-menu-nav">
            <h3 id="settings-label" className="menu-section-heading">
              Settings
            </h3>
            <ul className="list-unstyled main-menu-nav-items">
              <li className="main-menu-nav-item">
                <Buttonish
                  url="#"
                  icon={<IconComposer icon="Globe" />}
                  text="Language"
                />
              </li>
              <li className="main-menu-nav-item">
                <Buttonish
                  url="#"
                  icon={<IconComposer icon="Gear" />}
                  text="Adjustments"
                />
              </li>
              <li className="main-menu-nav-item">
                <Buttonish
                  url="#"
                  icon={<IconComposer icon="Bell" />}
                  text="Notifications"
                />
              </li>
              <li className="main-menu-nav-item">
                <Buttonish
                  url="#"
                  icon={<IconComposer icon="ShareSimple" />}
                  text="Share"
                />
              </li>
              <li className="main-menu-nav-item">
                <Buttonish
                  url="#"
                  icon={<IconComposer icon="Help" />}
                  text="Help"
                />
              </li>
              <li className="main-menu-nav-item">
                <Buttonish
                  url="#"
                  icon={<IconComposer icon="Info" />}
                  text="Info"
                />
              </li>
            </ul>
          </nav>
        </div>
        <div className="menu-section">
          <nav aria-labelledby="settings-label" className="quick-access-nav">
            <h3 id="settings-label" className="menu-section-heading">
              Quick Access
            </h3>
            {getQuickAccess()}
          </nav>
        </div>
      </>
    </Menu>
  );
}

MainMenu.displayName = "Global.MainMenu";

MainMenu.propTypes = {
  route: PropTypes.string,
};
