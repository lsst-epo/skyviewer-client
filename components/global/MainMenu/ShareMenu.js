import PropTypes from "prop-types";
import Menu from "@/components/atomic/Menu";
import ShareButtons from "@/components/organisms/ShareButtons";

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
          <ShareButtons direction="vertical" download={false} />
        </div>
      </div>
    </Menu>
  );
}

ShareMenu.propTypes = {
  toggleMenuCallback: PropTypes.func,
  isOpen: PropTypes.bool,
};
