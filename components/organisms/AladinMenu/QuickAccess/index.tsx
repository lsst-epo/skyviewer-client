"use client";
import { useLocale } from "next-intl";
import { IoMusicalNotes } from "react-icons/io5";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { MenuGroup, MenuItem } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import IconComposer from "@/components/svg/IconComposer";
import { getPathname, usePathname } from "@/lib/i18n/navigation";

const QuickAccess: FC = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const { t } = useTranslation();

  const links: Record<string, ReactNode> = {
    tours: (
      <MenuItem
        type="link"
        href={getPathname({ href: "/guided-experiences", locale })}
        text={t("menu.quick-access.links.guided-experiences")}
        icon={<IconComposer icon="Suitcase" />}
      />
    ),
    explorer: (
      <MenuItem
        type="link"
        href={getPathname({ href: "/explorer", locale })}
        text={t("menu.quick-access.links.explorer")}
        icon={<IconComposer icon="Sparkle" />}
      />
    ),
    skysynth: (
      <MenuItem
        type="link"
        href={getPathname({ href: "/skysynth", locale })}
        text={t("menu.quick-access.links.skysynth")}
        icon={<IoMusicalNotes color="var(--turquoise50)" />}
      />
    ),
  };

  const linkList = (
    <>
      {Object.entries(links).map(([key, link]) => {
        if (pathname.includes(key)) {
          return null;
        } else {
          return link;
        }
      })}
    </>
  );

  return <MenuGroup title={t("menu.quick-access.title")}>{linkList}</MenuGroup>;
};

QuickAccess.displayName = "Organism.Menu.QuickAccess";

export default QuickAccess;
