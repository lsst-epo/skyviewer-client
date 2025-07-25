"use client";
import { FC } from "react";
import { IoIosClose, IoIosSettings } from "react-icons/io";
import { MenuItem } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import { useTranslation } from "react-i18next";
import Submenu from "../Submenu";
import Layers from "./Layers";
import CoordinateFormat from "./CoordinateFormat";
import { SurveyLayer } from "@/lib/schema/survey";

interface DisplayMenuProps {
  layers?: Array<SurveyLayer>;
  debug?: boolean;
}

const DisplayMenu: FC<DisplayMenuProps> = ({ layers, debug = false }) => {
  const { t } = useTranslation();

  const handleClearSettings = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Submenu
      title={t("menu.display.title")}
      cta={t("menu.display.cta")}
      icon={<IoIosSettings />}
    >
      {layers && <Layers {...{ debug, layers }} />}
      <CoordinateFormat />
      <MenuItem
        type="button"
        onClick={handleClearSettings}
        text={t("menu.display.clear")}
        icon={<IoIosClose />}
      />
    </Submenu>
  );
};

DisplayMenu.displayName = "Organism.Menu.Display";

export default DisplayMenu;
