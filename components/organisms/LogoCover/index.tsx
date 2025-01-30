import { FunctionComponent } from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";
import Cover from "@/components/molecules/Cover";
import logo from "./rubin-triad.png";
import styles from "./styles.module.css";

const LogoCover: FunctionComponent<{ locale: string }> = async ({ locale }) => {
  const { t } = await useTranslation(locale, "translation");

  return (
    <Cover>
      <div className={styles.headerLogoContainer}>
        <Image className={styles.logoImage} src={logo} alt="" />
        <h1 className={styles.headerLogoCover}>{t("title")}</h1>
      </div>
    </Cover>
  );
};

LogoCover.displayName = "Layouts.LogoCover";

export default LogoCover;
