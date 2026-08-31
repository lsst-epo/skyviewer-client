import { FC, Suspense } from "react";
import { MenuGroup } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import Skeleton from "react-loading-skeleton";
import Submenu from "../Submenu";
import { getGlobalData } from "@/services/api/global";
import { useTranslation } from "@/lib/i18n/server";

interface AboutProps {
  locale: string;
}

const AboutContentMenuGroup: FC<{
  htmlContent: string | null;
  title: string;
}> = async ({ title, htmlContent }) => {
  return (
    <MenuGroup title={title}>
      {htmlContent && <div dangerouslySetInnerHTML={{ __html: htmlContent }} />}
    </MenuGroup>
  );
};

const AboutMenu: FC<AboutProps> = async ({ locale }) => {
  const { t } = await useTranslation(locale);
  const globals = await getGlobalData({ locale: locale });

  if (!globals) return null;

  const { aboutMenuContent, surveyMetaData } = globals;

  return (
    <Submenu
      title={t("menu.about.title")}
      cta={t("menu.about.cta")}
      icon="InfoCircle">
      <Suspense
        fallback={
          <>
            <MenuGroup title="">
              <Skeleton height="1lh" count={6} />
            </MenuGroup>
            <MenuGroup title="">
              <Skeleton height="1lh" count={6} />
            </MenuGroup>
          </>
        }>
        <AboutContentMenuGroup htmlContent={aboutMenuContent} title={""} />
        <AboutContentMenuGroup
          htmlContent={surveyMetaData}
          title={t("menu.about.sections.metadata.title")}
        />
      </Suspense>
    </Submenu>
  );
};

AboutMenu.displayName = "Organism.Menu.About";

export default AboutMenu;
