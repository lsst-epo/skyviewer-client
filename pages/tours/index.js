import Link from "next/link";
import { withLayout } from "@moxy/next-layout";
import ToursContext from "@/contexts/Tours";
import TourSortFilterContext from "@/contexts/TourSortFilter";
import GuidedExperiencesLayout from "@/layouts/GuidedExperiences";
import Tours from "@/components/tours";

import DEFAULT_FILTERS from "@/fixtures/defaultFilters";
import PLACEHOLDER_TOURS from "@/fixtures/placeholderTours";

const ToursPage = () => {
  return <Tours tours={PLACEHOLDER_TOURS} />;
};

export default withLayout(
  <GuidedExperiencesLayout
    guidedExperienceContext={ToursContext}
    sortFilterContext={TourSortFilterContext}
    defaultFilters={DEFAULT_FILTERS}
    className="tours-container"
    heading="Astronomical Tours"
    nextLink={{ url: "/astronomers-hall-of-fame", text: "Got to Hall of Fame" }}
  />
)(ToursPage);
