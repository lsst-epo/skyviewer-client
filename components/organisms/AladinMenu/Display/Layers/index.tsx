import { Description, Field, Label } from "@headlessui/react";
import { MenuGroup } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAladin } from "@/contexts/Aladin";
import { SurveyLayer } from "@/lib/schema/survey";
import { fadeLayer } from "@/lib/aladin/animation";
import Switch from "@/components/atomic/Switch";
import styles from "./styles.module.css";

type ToggleState = Record<string, boolean>;
interface LayersProps {
  layers: Array<SurveyLayer>;
  debug?: boolean;
}

const Layers: FC<LayersProps> = ({ layers, debug = false }) => {
  const [toggles, setToggles] = useState<ToggleState>({});
  const { t } = useTranslation();

  const setToggleState = ({ aladin }: { aladin: Aladin }) => {
    const config: ToggleState = {};
    aladin.getStackLayers().forEach((name) => {
      const layer =
        name === "base"
          ? aladin.getBaseImageLayer()
          : aladin.getOverlayImageLayer(name);

      if (layer) {
        config[name] = layer.getOpacity() > 0;
      }
    });

    setToggles({ ...toggles, ...config });
  };

  const { aladin, isLoading } = useAladin({
    callbacks: {
      onLoaded: setToggleState,
    },
  });

  const duration = 0.3;

  const handleToggle = (checked: boolean, layer: SurveyLayer) => {
    if (!isLoading) {
      const {
        id,
        survey: { opacity },
      } = layer;
      const hips = aladin?.getOverlayImageLayer(id);
      const from = checked ? 0 : opacity;
      const to = checked ? opacity : 0;

      if (hips) {
        fadeLayer({ hips, from, to, duration });
        setToggles({ ...toggles, [id]: checked });
      }
    }
  };

  return (
    <MenuGroup title={t("menu.display.layers.title")}>
      <ol className={styles.list}>
        {layers.map((layer, i) => {
          const {
            id,
            survey: { title, description },
          } = layer;
          const isLast = i === layers.length - 1;
          return (
            <Field as="li" className={styles.item} key={id}>
              <div>
                <Label className={styles.label}>{title}</Label>
                {description && (
                  <Description className={styles.description}>
                    {description}
                  </Description>
                )}
              </div>
              {(!isLast || debug) && (
                <Switch
                  style={{ "--time-duration-toggle": duration }}
                  onChange={(checked) => handleToggle(checked, layer)}
                  checked={!!toggles[id]}
                />
              )}
            </Field>
          );
        })}
      </ol>
    </MenuGroup>
  );
};

Layers.displayName = "Organism.Menu.Display.Layers";

export default Layers;
