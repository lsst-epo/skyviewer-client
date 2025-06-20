import { FC, PropsWithChildren } from "react";
import classnames from "clsx/lite";
import { Link } from "next-view-transitions";
import { MenuGroup } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import SlideoutWrapper from "./SlideoutWrapper";
import QuickAccess from "./QuickAccess";
import LocalesMenu from "./Locales";
import AboutMenu from "./About";
import VisuallyHidden from "@/components/atomic/VisuallyHidden";
import IconComposer from "@/components/svg/IconComposer";
import { useTranslation } from "@/lib/i18n/server";
import styles from "./styles.module.css";
import { getPathname } from "@/lib/i18n/navigation";

interface AladinMenuProps {
  closeUrl?: string;
  backgroundColor?: "primary" | "secondary";
  properties?: Array<string>;
  locale: string;
}

const AladinMenu: FC<PropsWithChildren<AladinMenuProps>> = async ({
  closeUrl = "/",
  backgroundColor = "primary",
  properties,
  locale,
  children,
}) => {
  const { t } = await useTranslation(locale);
  const path = getPathname({ href: closeUrl, locale });

  return (
    <header
      className={classnames(styles.mainHeader)}
      data-theme={backgroundColor}
    >
      <SlideoutWrapper>
        <MenuGroup title={t("menu.settings.title")}>
          <LocalesMenu />
          <AboutMenu {...{ properties, locale }} />
          {children}
        </MenuGroup>
        <QuickAccess />
      </SlideoutWrapper>
      <Link href={path} className={styles.closeButton}>
        <VisuallyHidden>{t("controls.close_explorer")}</VisuallyHidden>
        <IconComposer icon="Close" />
      </Link>
    </header>
  );
};

AladinMenu.displayName = "Organism.Aladin.Menu";

export default AladinMenu;
