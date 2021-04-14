import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import useFocusTrap from "@/hooks/useFocusTrap";
import { useKeyDownEvent } from "@/hooks/listeners";

export default function Modal({
  children,
  openButtonOpts,
  openCallback,
  closeButtonOpts,
  closeCallback,
  labelledbyId,
  describedbyId,
  secondaryCloseButton,
  secondaryCloseButtonOpts,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useFocusTrap(modalRef, isOpen);
  useKeyDownEvent(handleKeyDown);

  function handleKeyDown({ key }) {
    if (!isOpen || key !== "Escape") return;
    setIsOpen(false);
  }

  function handleClose() {
    setIsOpen(false);
    if (closeCallback) closeCallback();
  }

  function handleOpen() {
    setIsOpen(true);
    if (openCallback) openCallback();
  }

  return (
    <div className="modal-container">
      <Button {...openButtonOpts} onClick={handleOpen} />
      {isOpen && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal={true}
          aria-labelledby={labelledbyId}
          aria-describedby={describedbyId}
          className="modal"
        >
          <Button {...closeButtonOpts} onClick={handleClose} />
          <div className="modal-inner">{children}</div>
          {secondaryCloseButton && (
            <Button {...secondaryCloseButtonOpts} onClick={handleClose} />
          )}
        </div>
      )}
    </div>
  );
}

Modal.defaultProps = {
  closeButtonOpts: {
    icon: <IconComposer icon="Close" />,
    text: "Close Modal Dialog",
    isIcon: true,
    classes: "close-button",
  },
};

Modal.propTypes = {
  children: PropTypes.element,
  labelledbyId: PropTypes.string,
  describedbyId: PropTypes.string,
  openButtonOpts: PropTypes.object,
  closeButtonOpts: PropTypes.object,
  secondaryCloseButton: PropTypes.bool,
  secondaryCloseButtonOpts: PropTypes.object,
  openCallback: PropTypes.func,
  closeCallback: PropTypes.func,
  classes: PropTypes.string,
};
