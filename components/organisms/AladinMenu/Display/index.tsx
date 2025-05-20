"use client";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import Submenu from "../Submenu";
import { SurveyLayer } from "@/lib/schema/survey";
import Layers from "./Layers";
import CoordinateFormat from "./CoordinateFormat";
import { IoIosSettings } from "react-icons/io";

interface DisplayMenuProps {
  layers?: Array<SurveyLayer>;
}

const DisplayMenu: FC<DisplayMenuProps> = ({ layers }) => {
  const { t } = useTranslation();
  return (
    <Submenu
      title={t("menu.display.title")}
      cta={t("menu.display.cta")}
      icon={<IoIosSettings />}
    >
      {layers && <Layers layers={layers} />}
      <CoordinateFormat />
    </Submenu>
  );
};

DisplayMenu.displayName = "Organism.Menu.Display";

export default DisplayMenu;
