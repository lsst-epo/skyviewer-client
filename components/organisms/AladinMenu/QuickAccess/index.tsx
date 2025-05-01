"use client";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { MenuGroup, MenuItem } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import IconComposer from "@/components/svg/IconComposer";

const QuickAccess: FC = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  const linkMap: Record<string, JSX.Element> = {
    "/explorer": (
      <MenuItem
        type="link"
        href="/guided-experiences"
        text={t("menu.quick-access.links.guided-experiences")}
        icon={<IconComposer icon="Suitcase" />}
      />
    ),
  };

  const defaultQuickAccess = (
    <MenuItem
      href="/explorer"
      text={t("menu.quick-access.links.explorer")}
      icon={<IconComposer icon="Sparkle" />}
    />
  );

  const link = linkMap[pathname] || defaultQuickAccess;

  return <MenuGroup title={t("menu.quick-access.title")}>{link}</MenuGroup>;
};

QuickAccess.displayName = "Organism.Menu.QuickAccess";

export default QuickAccess;
