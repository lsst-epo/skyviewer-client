import PropTypes from "prop-types";
import Menu from "@/components/primitives/Menu";
import ShareButtons from "@/components/ShareButtons";

export default function ShareMenu({ toggleMenuCallback, isOpen }) {
  return (
    <Menu
      classes="main-menu share-menu"
      labelledbyId="share-menu-modal-label"
      describedbyId="share-menu-modal-description"
      heading="Share Skyviewer"
      subheading="Let people know about us!"
      openCallback={toggleMenuCallback}
      closeCallback={toggleMenuCallback}
      openOverride={isOpen}
    >
      <div className="main-menu-content-wrapper">
        <div className="menu-section">
          <ShareButtons classes="share-buttons-vertical" image={false} />
        </div>
      </div>
    </Menu>
  );
}

ShareMenu.propTypes = {
  toggleMenuCallback: PropTypes.func,
  isOpen: PropTypes.bool,
};
