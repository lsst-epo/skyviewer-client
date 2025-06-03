import Switch from "@/components/atomic/Switch";
import { env } from "@/env";
import { isDefaultLocale } from "@/lib/i18n";
import { getPathname } from "@/lib/i18n/navigation";
import { Description, Field, Fieldset, Label } from "@headlessui/react";
import { useLocale } from "next-intl";
import { FC, useState } from "react";
import styles from "./styles.module.css";
import Stack from "@rubin-epo/epo-react-lib/Stack";

const buildIframe = (src: string) => {
  const allowed = [
    "fullscreen",
    "clipboard-write",
    "clipboard-read",
    "web-share",
  ].join("; ");
  /** {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox} */
  const sandbox = [
    "allow-downloads",
    "allow-scripts",
    "allow-popups",
    "allow-popups-to-escape-sandbox",
    "allow-same-origin",
    "allow-forms",
  ].join(" ");

  return `<iframe src="${src}" allowed="${allowed}" sandbox="${sandbox}" />`;
};

const EmbedGenerator: FC = () => {
  const locale = useLocale();
  const [useCurrentView, setUseCurrentView] = useState(false);

  const path = getPathname({
    href: "/embed",
    locale,
    forcePrefix: !isDefaultLocale(locale),
  });

  const src = new URL(path, env.NEXT_PUBLIC_BASE_URL).toString();

  return (
    <Fieldset className={styles.embed}>
      <Stack>
        <code className={styles.output}>{buildIframe(src)}</code>
        <Field className={styles.field}>
          <div className={styles.controls}>
            <Label>Embed the current view</Label>
            <Switch />
          </div>
          <Description className={styles.description}>
            Setting this will initialize the embed at your current position
          </Description>
        </Field>
      </Stack>
    </Fieldset>
  );
};

EmbedGenerator.displayName = "Molecule.EmbedGenerator";

export default EmbedGenerator;
