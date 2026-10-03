import { FC } from "react";
import { setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import ViewTransition from "@/components/atomic/ViewTransition";
import GuidedExperienceLanding from "@/components/templates/GuidedExperienceLanding";
import ToursList from "@/components/organisms/ToursList";
import { getGuidedExperiences } from "@/services/api/guidedExperiences";
import { getTours } from "@/services/api/tours";

const TourCategoryPage: FC<TourCategoryProps> = async (
  { params: { locale, tourCategory } }) => {

  setRequestLocale(locale);

  const guidedExperienceEntries = await getGuidedExperiences();
  if (!guidedExperienceEntries) redirect("/guided-experiences");

  const { experiences } = guidedExperienceEntries;
  const currentTourCategory = experiences.find(
    (experiences) => experiences.tourCategory === tourCategory);
  const categoryTitle = currentTourCategory?.title;

  const tours = await getTours({locale,  category: tourCategory});

  return (
    <GuidedExperienceLanding
      title={
        <ViewTransition name="tours-title">{categoryTitle}</ViewTransition>
      }
    >
      <ToursList categorySlug={tourCategory} tours={tours} />
    </GuidedExperienceLanding>
  );
};

export default TourCategoryPage;