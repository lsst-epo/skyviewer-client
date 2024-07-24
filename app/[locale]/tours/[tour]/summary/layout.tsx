import { FunctionComponent, PropsWithChildren } from "react";
import GuidedExperienceLayout from "@/components/organisms/GuidedExperience";
import { TourProps } from "../layout";
import { getTourPoisData } from "@/lib/api/tour";
import { useTranslation } from "@/lib/i18n";

const SummaryLayout: FunctionComponent<PropsWithChildren<TourProps>> = async ({
  children,
  params: { locale, tour },
}) => {
  const { t } = await useTranslation(locale, "translation");
  const {
    tour: { tourPois = [] },
  } = await getTourPoisData(tour);

  const back = {
    url: `/tours/${tour}/tour?poi=${tourPois?.length}`,
    text: t("navigation.cta.back"),
  };
  const next = {
    url: "/tours/",
    text: t("navigation.cta.go_to_tours"),
  };

  return (
    <GuidedExperienceLayout
      mobileBackLink={back}
      mobileNextLink={next}
      desktopBackLink={back}
      desktopNextLink={next}
    >
      {children}
    </GuidedExperienceLayout>
  );
};

export default SummaryLayout;
