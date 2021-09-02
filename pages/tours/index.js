import { useContext, useState } from "react";
import Link from "next/link";
import { withLayout } from "@moxy/next-layout";
import ToursContext from "@/contexts/Tours";
import TourSortFilterContext from "@/contexts/TourSortFilter";
import TourSearchContext from "@/contexts/TourSearch";
import GuidedExperiencesLayout from "@/layouts/GuidedExperiences";
import Tours from "@/components/tours";
import { useToursBySearch, useToursByVarietyData } from "@/lib/api/tours";

import DEFAULT_FILTERS from "@/fixtures/defaultGEFilters";

const ToursPage = () => {
  const { searchTerm } = useContext(TourSearchContext) || {};
  const tours = useToursByVarietyData("tours")?.data || [];
  const searchResults = useToursBySearch(searchTerm, "tours")?.data || null;

  return <Tours tours={searchResults && searchTerm ? searchResults : tours} />;
};

export default withLayout(
  <GuidedExperiencesLayout
    sortFilterContext={TourSortFilterContext}
    searchContext={TourSearchContext}
    defaultFilters={DEFAULT_FILTERS}
    className="tours-container"
    heading="Astronomical Tours"
    nextLink={{ url: "/astronomers-hall-of-fame", text: "Go to Hall of Fame" }}
  />
)(ToursPage);
