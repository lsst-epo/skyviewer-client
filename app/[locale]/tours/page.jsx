"use client";
import { useContext } from "react";
import TourSortFilterContext from "@/contexts/TourSortFilter";
import TourSearchContext from "@/contexts/TourSearch";
import GuidedExperiencesLayout from "@/layouts/GuidedExperiences";
import Tours from "@/components/tours";
import { useToursBySearch, useToursByVarietyData } from "@/lib/api/tours";

import DEFAULT_FILTERS from "@/fixtures/defaultGEFilters";

const ToursPage = () => {
  const { searchTerm } = useContext(TourSearchContext) || {};
  const { isLoading, data: tours } = useToursByVarietyData("tours");
  const searchResults = useToursBySearch(searchTerm, "tours")?.data || null;

  return (
    <GuidedExperiencesLayout
      sortFilterContext={TourSortFilterContext}
      searchContext={TourSearchContext}
      defaultFilters={DEFAULT_FILTERS}
      className="tours-container"
      heading="Astronomical Tours"
      nextLink={{
        url: "/astronomers-hall-of-fame",
        text: "Go to Hall of Fame",
      }}
    >
      <Tours
        isToursLoading={isLoading}
        tours={searchResults && searchTerm ? searchResults : tours || []}
      />
    </GuidedExperiencesLayout>
  );
};

export default ToursPage;
