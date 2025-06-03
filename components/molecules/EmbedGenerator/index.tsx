import { useLocale } from "next-intl";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCopyToClipboard } from "usehooks-ts";
import { Description, Field, Fieldset, Label } from "@headlessui/react";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import Button from "@rubin-epo/epo-react-lib/Button";
import { env } from "@/env";
import { isDefaultLocale } from "@/lib/i18n";
import { getPathname } from "@/lib/i18n/navigation";
import { viewAsParams } from "@/lib/aladin/helpers";
import { useAladin } from "@/contexts/Aladin";
import Switch from "@/components/atomic/Switch";
import styles from "./styles.module.css";

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

  const style = [
    "border: none",
    "aspect-ratio: 16 / 9",
    "min-height: 500px",
    "max-height: 100%",
  ].join("; ");

  return `<iframe src="${src}" allowed="${allowed}" sandbox="${sandbox}" style="${style}"></iframe>`;
};

const EmbedGenerator: FC = () => {
  const { t } = useTranslation();
  const locale = useLocale();
  const [useCurrentView, setUseCurrentView] = useState(false);
  const { aladin } = useAladin();
  const [copied, copy] = useCopyToClipboard();

  const params =
    aladin && useCurrentView
      ? viewAsParams({
          fov: aladin.getFov()[0],
          target: aladin.getRaDec(),
        })
      : undefined;

  const path = getPathname({
    href: {
      pathname: "/embed",
      query: params ? Object.fromEntries(params) : undefined,
    },
    locale,
    forcePrefix: !isDefaultLocale(locale),
  });

  const src = new URL(path, env.NEXT_PUBLIC_BASE_URL).toString();
  const iframe = buildIframe(src);

  const handleCopyEmbed = () => {
    copy(buildIframe(src));
  };

  const handlePreviewIframe = () => {
    const tab = window.open("", "_blank");

    if (tab) {
      tab.document.title = t("menu.share.options.embed.preview_title");
      tab.document.body.lang = locale;
      tab.document.body.innerHTML = iframe;
    }
  };

  return (
    <Fieldset className={styles.embed}>
      <Stack space="var(--size-spacing-2xs)">
        <Field as={Stack} space="var(--size-spacing-2xs)">
          <div className={styles.controls}>
            <Switch checked={useCurrentView} onChange={setUseCurrentView} />
            <Label>
              {t("menu.share.options.embed.current_position.label")}
            </Label>
          </div>
          <Description className={styles.description}>
            {t("menu.share.options.embed.current_position.description")}
          </Description>
        </Field>
        <code className={styles.output}>{iframe}</code>
        <span className={styles.caption}>
          {t("menu.share.options.embed.instructions")}
        </span>
        <div className={styles.buttons}>
          <Button styleAs="tertiary" isBlock onClick={handlePreviewIframe}>
            {t("menu.share.options.embed.preview")}
          </Button>
          <Button onClick={handleCopyEmbed} isBlock>
            {copied?.length && copied.length > 0
              ? t("menu.share.options.embed.copied")
              : t("menu.share.options.embed.copy")}
          </Button>
        </div>
      </Stack>
    </Fieldset>
  );
};

export default EmbedGenerator;
