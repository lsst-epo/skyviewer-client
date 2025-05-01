"use client";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useId,
  useState,
} from "react";
import { type IconKey } from "@rubin-epo/epo-react-lib/IconComposer";
import { MenuItem, SlideoutMenu } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import styles from "./styles.module.css";

type SubmenuRenderProps = (props: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => ReactNode;

interface SubmenuProps {
  title: string;
  cta: string;
  icon: IconKey | ReactNode;
  children?: ReactNode | SubmenuRenderProps;
}

const Submenu: FC<SubmenuProps> = ({ children, title, cta, icon }) => {
  const id = useId();
  const [isOpen, setOpen] = useState(false);

  return (
    <MenuItem
      className={styles.menuItem}
      text={title}
      icon={icon}
      onClick={() => setOpen(true)}
      aria-controls={id}
      aria-expanded={isOpen}
    >
      <SlideoutMenu
        {...{ id, isOpen, title }}
        className={styles.menu}
        callToAction={cta}
        onCloseCallback={() => setOpen(false)}
      >
        {typeof children === "function" ? children({ setOpen }) : children}
      </SlideoutMenu>
    </MenuItem>
  );
};

Submenu.displayName = "Organism.Submenu";

export default Submenu;
