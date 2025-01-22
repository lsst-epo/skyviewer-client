import GuidedExperienceLayout from "@/components/organisms/GuidedExperience";
import GuidedExperienceLanding from "@/components/guidedExperiences/GuidedExperienceLanding";
import { getTourData } from "@/lib/api/tour";
import { useTranslation } from "@/lib/i18n";
import { FunctionComponent } from "react";
import { notFound } from "next/navigation";

const TourPage: FunctionComponent<TourProps> = async ({
  params: { tour, locale },
}) => {
  const { tour: data } = await getTourData(tour);
  const { t } = await useTranslation(locale, "translation");

  if (!data) {
    return notFound();
  }

  const { title, complexity, duration, thumbnail, backgroundImage } = data;

  const backLink = { url: `/tours`, text: t("navigation.cta.back") };
  const nextLink = {
    url: { pathname: `/tours/${tour}/intro`, query: { step: 1 } },
    text: t("navigation.cta.lets_start"),
  };

  return (
    <GuidedExperienceLayout
      desktopBackLink={backLink}
      desktopNextLink={nextLink}
      mobileBackLink={backLink}
      mobileNextLink={nextLink}
    >
      <GuidedExperienceLanding
        {...{ title, thumbnail, backgroundImage, duration, complexity }}
      />
    </GuidedExperienceLayout>
  );
};

export default TourPage;
