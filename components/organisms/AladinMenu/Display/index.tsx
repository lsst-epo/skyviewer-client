"use client";
import { FC } from "react";
import { IoIosClose, IoIosSettings } from "react-icons/io";
import { MenuItem } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import { useTranslation } from "react-i18next";
import Submenu from "../Submenu";
import { SurveyLayer } from "@/lib/schema/survey";
import Layers from "./Layers";
import CoordinateFormat from "./CoordinateFormat";

interface DisplayMenuProps {
  layers?: Array<SurveyLayer>;
}

const DisplayMenu: FC<DisplayMenuProps> = ({ layers }) => {
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
      {layers && <Layers layers={layers} />}
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
