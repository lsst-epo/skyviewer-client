import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "@/global/GuidedExperienceHeader";
import SecondaryHeader from "@/global/SecondaryHeader";
import NavLink from "@/primitives/NavLink";
import IconComposer from "@/svg/IconComposer";
import { useToursByVarietyData } from "@/lib/api/tours";

export default function GuidedExperiencesLayout({
  className,
  heading,
  nextLink,
  backLink,
  defaultFilters,
  sortFilterContext,
  searchContext,
  children,
}) {
  const [filters, setFilters] = useState(defaultFilters);
  const [searchTerm, setSearchTerm] = useState(null);

  const { Provider: SortFilterProvider } = sortFilterContext;
  const { Provider: SearchProvider } = searchContext;

  return (
    <SortFilterProvider value={{ filters, setFilters }}>
      <SearchProvider value={{ searchTerm, setSearchTerm }}>
        <div className={className}>
          <div>
            <Header {...{ nextLink, backLink, heading }} />
            <SecondaryHeader
              defaultFilters={defaultFilters}
              sortFilterContext={sortFilterContext}
              searchContext={searchContext}
            />
          </div>
          <div className="children">{children}</div>
          <NavLink
            url="/guided-experiences"
            text="Back to Guided Experiences"
            iconBefore
            icon={<IconComposer icon="ArrowLeft" />}
          />
        </div>
      </SearchProvider>
    </SortFilterProvider>
  );
}

GuidedExperiencesLayout.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
  nextLink: PropTypes.object,
  backLink: PropTypes.object,
  children: PropTypes.node,
  sortFilterContext: PropTypes.object,
  searchContext: PropTypes.object,
  defaultFilters: PropTypes.object,
};
