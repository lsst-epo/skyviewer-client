"use client";
import { useLocale } from "next-intl";

import { FC } from "react";
import { useTranslation } from "react-i18next";
import { MenuGroup, MenuItem } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import IconComposer from "@/components/svg/IconComposer";
import { getPathname, usePathname } from "@/lib/i18n/navigation";

const QuickAccess: FC = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const { t } = useTranslation();

  const linkMap: Record<string, JSX.Element> = {
    "/explorer": (
      <MenuItem
        type="link"
        href={getPathname({ href: "/guided-experiences", locale })}
        text={t("menu.quick-access.links.guided-experiences")}
        icon={<IconComposer icon="Suitcase" />}
      />
    ),
  };

  const defaultQuickAccess = (
    <MenuItem
      type="link"
      href={getPathname({ href: "/explorer", locale })}
      text={t("menu.quick-access.links.explorer")}
      icon={<IconComposer icon="Sparkle" />}
    />
  );

  const link = linkMap[pathname] || defaultQuickAccess;

  return <MenuGroup title={t("menu.quick-access.title")}>{link}</MenuGroup>;
};

QuickAccess.displayName = "Organism.Menu.QuickAccess";

export default QuickAccess;
