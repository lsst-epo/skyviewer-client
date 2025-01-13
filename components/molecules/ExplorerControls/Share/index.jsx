import IconComposer from "@/components/svg/IconComposer";
import Modal from "@/components/primitives/Modal";
import ShareButtons from "@/components/ShareButtons";

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
        <ShareButtons classes="share-buttons-horizontal" />
      </>
    </Modal>
  );
}
