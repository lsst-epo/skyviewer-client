import { FC } from "react";
import { setRequestLocale } from "next-intl/server";
import ViewTransition from "@/components/atomic/ViewTransition";
import GuidedExperienceLanding from "@/components/templates/GuidedExperienceLanding";
import ToursList from "@/components/organisms/ToursList";
import { getCategoryBySlug } from "@/services/api/categories";
import { getTours } from "@/services/api/tours";

const TourCategoryPage: FC<TourCategoryProps> = async (
  { params: { locale, tourCategory } }) => {

  setRequestLocale(locale);

  const categoryTitle = await getCategoryBySlug(tourCategory);
  const tours = await getTours({locale,  categorySlug: tourCategory});

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