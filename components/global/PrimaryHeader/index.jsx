import { useEffect, useContext, useState } from "react";
import MenuContext from "@/contexts/Menu";
import PropTypes from "prop-types";
import classnames from "classnames";
import Buttonish from "@/primitives/Buttonish";
import MainMenu from "@/global/MainMenu";
import IconComposer from "@/svg/IconComposer";
import Close from "@/svg/icons/Close";
import Hamburger from "@/svg/icons/Hamburger";

const quickAccessItems = [{}];

export default function Header({ closeUrl = "/", route }) {
  const { menusOpen } = useContext(MenuContext) || {};
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
        classes={classnames("close-button", {
          "menus-open": (menusOpen || []).length > 0,
        })}
      />
    </header>
  );
}

Header.propTypes = {
  closeUrl: PropTypes.string,
  route: PropTypes.string,
};
