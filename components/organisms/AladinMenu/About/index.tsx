import { FC, Suspense } from "react";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import { MenuGroup } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import Skeleton from "react-loading-skeleton";
import Submenu from "../Submenu";
import { getProperties } from "@/services/aladin";
import { getGlobalData } from "@/services/api/global";
import SurveyMetadata from "@/components/molecules/SurveyMetadata";
import { useTranslation } from "@/lib/i18n/server";
import styles from "./styles.module.css";

interface AboutProps {
  properties?: Array<string>;
  locale: string;
}

const MetadataContent: FC<Required<AboutProps>> = async ({
  properties,
  locale,
}) => {
  const requests = properties.map(getProperties);
  const settled = await Promise.allSettled(requests);

  return (
    <ul className={styles.metadataList}>
      {settled.map(async (result, i) => {
        if (result.status === "fulfilled") {
          const { value } = result;

          return (
            <li key={i}>
              <SurveyMetadata
                metadata={value}
                locale={locale}
                className={styles.metadata}
              />
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

const AboutContent: FC<{ locale: string }> = async ({ locale }) => {
  const globals = await getGlobalData({ locale: locale });

  if (!globals) return null;

  const { aboutMenuContent } = globals;

  return (
    <MenuGroup title="">
      {aboutMenuContent && (
        <div dangerouslySetInnerHTML={{ __html: aboutMenuContent }} />
      )}
    </MenuGroup>
  );
};

const AboutMenu: FC<AboutProps> = async ({ properties, locale }) => {
  const { t } = await useTranslation(locale);

  return (
    <Submenu
      title={t("menu.about.title")}
      cta={t("menu.about.cta")}
      icon="InfoCircle"
    >
      <Suspense
        fallback={
          <MenuGroup title="">
            <Skeleton height="1lh" count={6} />
          </MenuGroup>
        }
      >
        <AboutContent locale={locale} />
      </Suspense>
      {properties && properties.length > 0 && (
        <MenuGroup title={t("menu.about.sections.metadata.title")}>
          <Suspense
            fallback={
              <Stack space="var(--size-spacing-2xs">
                <Skeleton height="1.5lh" />
                <Skeleton height="1lh" count={6} />
                <Skeleton height="1lh" width="66%" />
                <Skeleton height="1lh" width="33%" />
              </Stack>
            }
          >
            <MetadataContent {...{ properties, locale }} />
          </Suspense>
        </MenuGroup>
      )}
    </Submenu>
  );
};

AboutMenu.displayName = "Organism.Menu.About";

export default AboutMenu;
