"use client";
import {
  createContext,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface MenuContextValue {
  menusOpen: Array<string>;
  setMenusOpen: Dispatch<SetStateAction<Array<string>>>;
}

const MenuContext = createContext<MenuContextValue | null>(null);

export const MenuProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [menusOpen, setMenusOpen] = useState([]);

  return (
    <MenuContext.Provider value={{ menusOpen, setMenusOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
