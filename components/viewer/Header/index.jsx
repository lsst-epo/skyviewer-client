import { useEffect, useState } from "react";
import Button from "@/primitives/Button";
import Close from "@/svg/icons/Close";
import Hamburger from "@/svg/icons/Hamburger";

export default function Header() {
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
      <Button
        icon={<Close />}
        onClick={onCloseToggle}
        text="Toggle Skyviewer"
        isIcon
        classes="close-button"
      />
    </header>
  );
}
