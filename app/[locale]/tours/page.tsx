import { FC } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslation } from "@/lib/i18n/server";
import ViewTransition from "@/components/atomic/ViewTransition";
import GuidedExperienceLanding from "@/components/templates/GuidedExperienceLanding";
import ToursList from "@/components/organisms/ToursList";

const ToursPage: FC<RootProps> = async ({ params: { locale } }) => {
  setRequestLocale(locale);
  const { t } = await useTranslation(locale);
  return (
    <GuidedExperienceLanding
      title={
        <ViewTransition name="tours-title">{t("tours.title")}</ViewTransition>
      }
    >
      <ToursList {...{ locale }} />
    </GuidedExperienceLanding>
  );
};

export default ToursPage;
