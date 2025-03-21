import { useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "clsx";
import Button from "@/components/atomic/Button";
import IconComposer from "@/components/svg/IconComposer";
import useFocusTrap from "@/hooks/useFocusTrap";
import { useKeyDownEvent, useOnClickOutside } from "@/hooks/listeners";

export default function Modal({
  children,
  openButtonOpts,
  openCallback,
  closeButtonOpts = {
    icon: <IconComposer icon="Close" />,
    text: "Close Modal Dialog",
    isIcon: true,
    classes: "close-button",
  },
  closeCallback,
  closeKey,
  labelledbyId,
  describedbyId,
  secondaryCloseButton,
  secondaryCloseButtonOpts,
  classes,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  function handleKeyDown({ key }) {
    if (!isOpen) return;
    if (key === "Escape") {
      handleClose();
    }

    if (closeKey && key === closeKey) {
      handleClose();
    }
  }

  function handleClose() {
    if (!isOpen) return;
    setIsOpen(false);
    if (closeCallback) closeCallback(false);
  }

  function handleOpen() {
    if (isOpen) return;
    setIsOpen(true);
    if (openCallback) openCallback();
  }

  useFocusTrap(modalRef, isOpen);
  useKeyDownEvent(handleKeyDown);
  useOnClickOutside(modalRef, handleClose);

  return (
    <div
      className={classnames("modal-container", classes, {
        "is-open": isOpen,
      })}
    >
      <Button {...openButtonOpts} onClick={handleOpen} />
      <div
        role="dialog"
        aria-modal={true}
        aria-labelledby={labelledbyId}
        aria-describedby={describedbyId}
        className={classnames("modal", {
          "is-open": isOpen,
        })}
      >
        <div ref={modalRef} className="modal-inner">
          <Button {...closeButtonOpts} onClick={handleClose} />
          {children}
          {secondaryCloseButton && (
            <Button {...secondaryCloseButtonOpts} onClick={handleClose} />
          )}
        </div>
      </div>
    </div>
  );
}

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
  closeKey: PropTypes.string,
  classes: PropTypes.string,
};
