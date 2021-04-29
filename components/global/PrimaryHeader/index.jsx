import { useEffect, useState } from "react";
import Button from "@/primitives/Button";
import PropTypes from "prop-types";
import Buttonish from "@/primitives/Buttonish";
import Close from "@/svg/icons/Close";
import Hamburger from "@/svg/icons/Hamburger";

export default function Header({ closeUrl = "/" }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMenu, setIsMenu] = useState(false);

  const onCloseToggle = () => setIsOpen(!isOpen);
  const onMenuToggle = () => setIsOpen(!isMenu);

  return (
    <header className="main-header">
      <Button
        icon={<Hamburger />}
        onClick={onMenuToggle}
        text="Toggle Menu"
        isIcon
        classes="menu-button"
      />
      <Buttonish
        url={closeUrl}
        icon={<Close />}
        onClick={onCloseToggle}
        text="Close Explorer"
        isIcon
        classes="close-button"
      />
    </header>
  );
}

Header.propTypes = {
  closeUrl: PropTypes.string,
};
