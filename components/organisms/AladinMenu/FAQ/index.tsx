import {FC, Suspense} from "react";
import { MenuGroup } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import Skeleton from "react-loading-skeleton";
import Submenu from "../Submenu";
import {getGlobalData} from '@/services/api/global';
import IconComposer from "@/components/svg/IconComposer";
import { useTranslation } from "@/lib/i18n/server";

interface FAQProps {
  locale: string;
}

const FAQMenu:  FC<FAQProps> = async ({locale}) => {
  const { t } = await useTranslation(locale);
  const globals = await getGlobalData({ locale: locale});

  if (!globals) return null;

  const { faqMenuContent } = globals;

  return (
    <Submenu
      title={t("menu.faq.title")}
      cta={t("menu.faq.cta")}
      icon={<IconComposer icon="FAQ"/>}>
      <Suspense
        fallback={
          <MenuGroup title="">
            <Skeleton height="1lh" count={3} />
          </MenuGroup>
        }>
      </Suspense>
      <MenuGroup title="">
        {faqMenuContent && (
          <div dangerouslySetInnerHTML={{ __html: faqMenuContent }} />
        )}
      </MenuGroup>
    </Submenu>
  );
};

FAQMenu.displayName = "organism.Menu.FAQ";

export default FAQMenu;