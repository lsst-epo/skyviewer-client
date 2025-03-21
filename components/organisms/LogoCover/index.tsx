import { FunctionComponent } from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/server";
import PageTitle from "@/components/atomic/BlockTitle";
import Cover from "@/components/molecules/Cover";
import logo from "./rubin-triad.png";
import ViewTransition from "@/components/atomic/ViewTransition";
import styles from "./styles.module.css";

const LogoCover: FunctionComponent<{ locale: string }> = async ({ locale }) => {
  const { t } = await useTranslation(locale, "translation");

  return (
    <Cover>
      <div className={styles.headerLogoContainer}>
        <Image className={styles.logoImage} src={logo} alt="" priority />
        <PageTitle>
          <ViewTransition name="title">{t("title")}</ViewTransition>
        </PageTitle>
      </div>
    </Cover>
  );
};

LogoCover.displayName = "Layouts.LogoCover";

export default LogoCover;
