import { useState } from "react";
import { MenuProvider } from "@/contexts/Menu";
import PropTypes from "prop-types";
import Header from "@/global/PrimaryHeader";

export default function PrimaryLayout({
  closeUrl,
  route,
  backgroundColor = "primary",
  children,
}) {
  const [menusOpen, setMenusOpen] = useState([]);

  return (
    <MenuProvider value={{ setMenusOpen, menusOpen }}>
      <Header
        backgroundColor={backgroundColor}
        closeUrl={closeUrl}
        route={route}
      />
      {children}
    </MenuProvider>
  );
}

PrimaryLayout.propTypes = {
  closeUrl: PropTypes.string,
  route: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};
