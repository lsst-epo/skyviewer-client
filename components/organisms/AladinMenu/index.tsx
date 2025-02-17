import { FC } from "react";
import classnames from "clsx";
import { Link } from "next-view-transitions";
import VisuallyHidden from "@/components/primitives/VisuallyHidden";
import MainMenu from "@/components/global/MainMenu";
import IconComposer from "@/components/svg/IconComposer";
import styles from "./styles.module.css";
import { useTranslation } from "@/lib/i18n/server";

interface AladinMenuProps {
  closeUrl?: string;
  backgroundColor?: "primary" | "secondary";
  route?: string;
}

const AladinMenu: FC<AladinMenuProps> = async ({
  closeUrl = "/",
  backgroundColor,
  route,
}) => {
  const { t } = await useTranslation();

  return (
    <header
      className={classnames(styles.mainHeader)}
      data-theme={backgroundColor}
    >
      <MainMenu route={route} />
      <Link href={closeUrl} className={styles.closeButton}>
        <VisuallyHidden>{t("controls.close_explorer")}</VisuallyHidden>
        <IconComposer icon="Close" />
      </Link>
    </header>
  );
};

AladinMenu.displayName = "Organism.Aladin.Menu";

export default AladinMenu;
