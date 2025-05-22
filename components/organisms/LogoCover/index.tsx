import { FunctionComponent } from "react";
import Image from "next/image";
import { getGlobalData } from "@/services/api/global";
import { assetAlt } from "@/lib/canto/metadata";
import { useTranslation } from "@/lib/i18n/server";
import PageTitle from "@/components/atomic/BlockTitle";
import Cover from "@/components/molecules/Cover";
import ViewTransition from "@/components/atomic/ViewTransition";
import styles from "./styles.module.css";

const LogoCover: FunctionComponent<{ locale: string }> = async ({ locale }) => {
  const { t } = await useTranslation(locale, "translation");
  const globals = await getGlobalData({ locale });
  const title = globals?.siteTitle || t("title");

  return (
    <Cover>
      <div className={styles.headerLogoContainer}>
        {globals?.logo && (
          <Image
            className={styles.logoImage}
            src={globals.logo.url.directUrlPreview}
            width={globals.logo.width}
            height={globals.logo.height}
            alt={assetAlt(globals.logo.additional, locale)}
            priority
          />
        )}
        <PageTitle>
          <ViewTransition name="title">{title}</ViewTransition>
        </PageTitle>
      </div>
    </Cover>
  );
};

LogoCover.displayName = "Layouts.LogoCover";

export default LogoCover;
