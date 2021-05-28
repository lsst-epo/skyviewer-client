import Buttonish from "@/primitives/Buttonish";
import IconComposer from "@/svg/IconComposer";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import Modal from "@/primitives/Modal";
import ShareButton from "./ShareButton.js";
import CopyUrlButton from "./CopyUrlButton.js";
import GetImageButton from "./GetImageButton.js";

export default function Share() {
  return (
    <Modal
      classes="share-menu"
      openButtonOpts={{
        icon: <IconComposer icon="Share" />,
        text: "Open Share Menu",
        isIcon: true,
        classes: "open-share-button control-button",
      }}
      closeButtonOpts={{
        icon: <IconComposer icon="Close" />,
        text: "Close Share Menu",
        isIcon: true,
        classes: "close-button small",
      }}
    >
      <>
        <h3 className="modal-heading">Share</h3>

        <ul className="share-buttons" role="menu" aria-label="Share Buttons">
          <li role="menuitem">
            <CopyUrlButton
              icon={<IconComposer icon="Chain" />}
              text="Get Url"
              network="url"
            />
          </li>
          <li role="menuitem">
            <ShareButton
              icon={<IconComposer icon="Facebook" />}
              text="Facebook"
              network="facebook"
              description="Example Facebook post description"
            />
          </li>
          <li role="menuitem">
            <ShareButton
              icon={<IconComposer icon="Twitter" />}
              text="Twitter"
              network="twitter"
              description="Example Tweet description"
            />
          </li>
          <li role="menuitem">
            <GetImageButton
              icon={<IconComposer icon="ShareSimple" />}
              text="Get Image"
              network="image"
            />
          </li>
          <li role="menuitem">
            <ShareButton
              icon={<IconComposer icon="Email" />}
              text="Email"
              network="email"
              message="Example Email message"
            />
          </li>
        </ul>
      </>
    </Modal>
  );
}
