import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Buttonish from "@/primitives/Buttonish";
import MainMenu from "@/global/MainMenu";
import IconComposer from "@/svg/IconComposer";
import Close from "@/svg/icons/Close";
import Hamburger from "@/svg/icons/Hamburger";

const quickAccessItems = [{}];

export default function Header({ closeUrl = "/", route }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMenu, setIsMenu] = useState(false);

  const closeMenu = () => setIsOpen(!isOpen);
  const onMenuToggle = () => setIsOpen(!isMenu);

  return (
    <header className="main-header">
      <MainMenu route={route} />
      <Buttonish
        url={closeUrl}
        icon={<Close />}
        text="Close Explorer"
        isIcon
        classes="close-button"
      />
    </header>
  );
}

Header.propTypes = {
  closeUrl: PropTypes.string,
  route: PropTypes.string,
};
