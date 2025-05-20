import { useAladin } from "@/contexts/Aladin";
import {
  useAladinDisplay,
  AladinDisplayOptions,
} from "@/contexts/AladinDisplay";
import {
  MenuGroup,
  MenuItemRadio,
} from "@rubin-epo/epo-react-lib/SlideoutMenu";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

const CoordinateFormat: FC = () => {
  const [example, setExample] = useState<Coo>();
  const { t } = useTranslation();
  const { display, setDisplay } = useAladinDisplay();

  useAladin({
    callbacks: {
      onLoaded: ({ A }) => {
        setExample(A.coo(186.2, 7, 5));
      },
    },
  });

  const values: Array<AladinDisplayOptions["coordinateFormat"]> = ["d", "s"];

  return (
    <MenuGroup title={t("menu.display.coordinates.title")}>
      <div className={styles.caption}>
        Change the format of RA/DEC coordinates on the right-click menu
      </div>
      {values.map((value) => {
        return (
          <MenuItemRadio
            key={value}
            isChecked={display.coordinateFormat === value}
            onCheckCallback={() =>
              setDisplay({ ...display, coordinateFormat: value })
            }
          >
            <div>
              {t(`menu.display.coordinates.options.${value}`)}
              <div className={styles.example}>
                {t("menu.display.coordinates.example", {
                  example: example?.format(value),
                })}
              </div>
            </div>
          </MenuItemRadio>
        );
      })}
    </MenuGroup>
  );
};

CoordinateFormat.displayName = "Organism.Menu.Display.CoordinateFormat";

export default CoordinateFormat;
