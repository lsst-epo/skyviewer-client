"use client";
import { FC, useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import Submenu from "../Submenu";
import { SurveyLayer } from "@/lib/schema/survey";
import { useAladin } from "@/contexts/Aladin";
import styles from "./styles.module.css";
import { fadeLayer } from "@/lib/aladin/animation";

interface ToggleLayersMenuProps {
  layers: Array<SurveyLayer>;
}

const ToggleLayersMenu: FC<ToggleLayersMenuProps> = ({ layers }) => {
  const [toggles, setToggles] = useState<Record<string, boolean>>({});
  const { t } = useTranslation();
  const { aladin, isLoading } = useAladin({
    callbacks: {
      onLoaded: ({ aladin }) => {
        aladin.getStackLayers().forEach((name) => {
          const layer =
            name === "base"
              ? aladin.getBaseImageLayer()
              : aladin.getOverlayImageLayer(name);

          if (layer) {
            setToggles({ ...toggles, [name]: layer?.getOpacity() === 1 });
          }
        });
      },
    },
  });

  const handleToggle = (checked: boolean, id: string) => {
    if (!isLoading) {
      const hips = aladin?.getOverlayImageLayer(id);
      const from = checked ? 0 : 1;
      const to = checked ? 1 : 0;

      if (hips) {
        fadeLayer({ hips, from, to });
        setToggles({ ...toggles, [id]: checked });
      }
    }
  };

  return (
    <Submenu title="Survey layers" cta="Toggle survey layers" icon="Globe">
      <ol className={styles.list}>
        {layers.map(({ id, survey }, i) => {
          const isLast = i === layers.length - 1;
          return (
            <Field as="li" className={styles.item} key={id}>
              <Label>{survey.title}</Label>
              <Switch
                className={styles.switch}
                onChange={(checked) => handleToggle(checked, id)}
                checked={isLast || !!toggles[id]}
                disabled={isLast}
              ></Switch>
            </Field>
          );
        })}
      </ol>
    </Submenu>
  );
};

ToggleLayersMenu.displayName = "Organism.Menu.ToggleLayers";

export default ToggleLayersMenu;
