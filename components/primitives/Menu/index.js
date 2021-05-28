import { useEffect, useContext, useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import MenuContext from "@/contexts/Menu";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";
import useFocusTrap from "@/hooks/useFocusTrap";
import { useKeyDownEvent, useOnClickOutside } from "@/hooks/listeners";

export default function Menu({
  children,
  classes,
  headerIcon,
  heading,
  subheading,
  openOverride,
  openButtonOpts,
  openCallback,
  closeButtonOpts,
  closeCallback,
  labelledbyId,
  describedbyId,
  secondaryCloseButton,
  secondaryCloseButtonOpts,
}) {
  const { setMenusOpen, menusOpen } = useContext(MenuContext) || {};

  const [isOpen, setIsOpen] = useState(
    typeof openOverride === "boolean" ? openOverride : false
  );
  const menuRef = useRef(null);

  function handleKeyDown({ key }) {
    if (!isOpen || key !== "Escape") return;
    handleClose();
  }

  function handleClose() {
    const isOpenOverride = typeof openOverride === "boolean";

    if (!isOpenOverride) setIsOpen(false);

    if (isOpenOverride && closeCallback) {
      closeCallback(false);
    } else if (closeCallback) {
      closeCallback(false);
    }

    if (menusOpen && setMenusOpen) {
      if (menusOpen.includes(labelledbyId)) {
        setMenusOpen(
          menusOpen.filter((menuId, index) => {
            return menuId !== labelledbyId;
          })
        );
      }
    }
  }

  function handleOpen() {
    const isOpenOverride = typeof openOverride === "boolean";
    if (!isOpenOverride) {
      setIsOpen(true);
    }

    if (isOpenOverride && openCallback) {
      openCallback(true);
    } else if (openCallback) {
      openCallback(true);
    }

    if (menusOpen && setMenusOpen) {
      if (!menusOpen.includes(labelledbyId)) {
        setMenusOpen([...menusOpen, labelledbyId]);
      }
    }
  }

  useEffect(() => {
    const isOpenOverride = typeof openOverride === "boolean";
    if (isOpenOverride) {
      setIsOpen(openOverride);
    }
  }, [openOverride]);

  useFocusTrap(menuRef, isOpen);
  useKeyDownEvent(handleKeyDown);
  useOnClickOutside(menuRef, handleClose);

  return (
    <div className="menu-container">
      <Button {...openButtonOpts} onClick={handleOpen} />
      <div
        role="dialog"
        aria-modal={true}
        aria-labelledby={labelledbyId}
        aria-describedby={describedbyId}
        className={classnames("menu-modal", {
          "is-open": isOpen,
        })}
      >
        <div className="modal-inner">
          <div
            ref={menuRef}
            className={classnames("menu", {
              [classes]: classes,
            })}
          >
            <div className="menu-header">
              <div className="menu-header-matter">
                {headerIcon && (
                  <IconComposer
                    icon={headerIcon}
                    className="menu-header-icon"
                  />
                )}
                <div>
                  <h2 id={labelledbyId} className="menu-header-heading">
                    {heading}
                  </h2>
                  <div id={describedbyId} className="menu-header-subheading">
                    {subheading}
                  </div>
                </div>
              </div>
              <Button {...closeButtonOpts} onClick={handleClose} />
            </div>
            {children}
            {secondaryCloseButton && (
              <Button {...secondaryCloseButtonOpts} onClick={handleClose} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Menu.defaultProps = {
  closeButtonOpts: {
    icon: <IconComposer icon="Close" />,
    text: "Close Menu Dialog",
    isIcon: true,
    classes: "close-button",
  },
};

Menu.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.string,
  headerIcon: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  labelledbyId: PropTypes.string,
  describedbyId: PropTypes.string,
  openButtonOpts: PropTypes.object,
  closeButtonOpts: PropTypes.object,
  secondaryCloseButton: PropTypes.bool,
  secondaryCloseButtonOpts: PropTypes.object,
  openCallback: PropTypes.func,
  closeCallback: PropTypes.func,
  openOverride: PropTypes.bool,
};
