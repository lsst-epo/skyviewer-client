import { FC, PropsWithChildren } from "react";
import classnames from "clsx";
import { Link } from "next-view-transitions";
import VisuallyHidden from "@/components/atomic/VisuallyHidden";
import IconComposer from "@/components/svg/IconComposer";
import styles from "./styles.module.css";
import { useTranslation } from "@/lib/i18n/server";
import SlideoutWrapper from "./SlideoutWrapper";
import QuickAccess from "./QuickAccess";
import LocalesMenu from "./Locales";
import { MenuGroup } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import AboutMenu from "./About";

interface AladinMenuProps {
  closeUrl?: string;
  backgroundColor?: "primary" | "secondary";
  properties?: Array<string>;
  locale: string;
}

const AladinMenu: FC<PropsWithChildren<AladinMenuProps>> = async ({
  closeUrl = "/",
  backgroundColor,
  properties,
  locale,
  children,
}) => {
  const { t } = await useTranslation(locale);

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
      <Link href={closeUrl} className={styles.closeButton}>
        <VisuallyHidden>{t("controls.close_explorer")}</VisuallyHidden>
        <IconComposer icon="Close" />
      </Link>
    </header>
  );
};

AladinMenu.displayName = "Organism.Aladin.Menu";

export default AladinMenu;
