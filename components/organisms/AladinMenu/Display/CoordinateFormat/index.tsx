import { useAladin } from "@/contexts/Aladin";
import {
  MenuGroup,
  MenuItemRadio,
} from "@rubin-epo/epo-react-lib/SlideoutMenu";
import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { frameMap } from "@/lib/aladin/helpers";
import styles from "./styles.module.css";
import useAladinEvent from "@/hooks/useAladinEvent";

const CoordinateFormat: FC = () => {
  const [frame, setFrame] = useState<CooFrame>();
  const example = useRef<Coo>();
  const { t } = useTranslation();

  const { aladin } = useAladin({
    callbacks: {
      onLoaded: ({ A, aladin }) => {
        setFrame(aladin.getFrame());
        example.current = A.coo(186.2, 7, 5);
      },
    },
  });

  useAladinEvent("frame.changed", ({ detail }) => {
    setFrame(detail.cooFrame.label);
  });

  const values: Array<Partial<CooFrame>> = ["ICRS", "ICRSd"];

  return (
    <MenuGroup title={t("menu.display.coordinates.title")}>
      <div className={styles.caption}>
        {t("menu.display.coordinates.caption")}
      </div>
      {values.map((value) => {
        const format = frameMap[value];
        return (
          <MenuItemRadio
            key={value}
            isChecked={frame === value}
            onCheckCallback={() => {
              aladin?.setFrame(value);
            }}
          >
            <div>
              {t(`menu.display.coordinates.options.${format}`)}
              <div className={styles.example}>
                {t("menu.display.coordinates.example", {
                  example: example.current?.format(format),
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
