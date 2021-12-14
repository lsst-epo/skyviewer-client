import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "@/global/GuidedExperienceHeader";
import SecondaryHeader from "@/global/SecondaryHeader";
import NavLink from "@/primitives/NavLink";
import IconComposer from "@/svg/IconComposer";
import useResizeObserver from "use-resize-observer";
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

  const { ref: navRef } = useResizeObserver({
    onResize: ({ height }) => {
      document.documentElement.style.setProperty(
        "--ges-nav-height",
        `${height}px`
      );
    },
  });

  const { ref: headerRef } = useResizeObserver({
    onResize: ({ height }) => {
      document.documentElement.style.setProperty(
        "--ges-header-height",
        `${height}px`
      );
    },
  });

  return (
    <SortFilterProvider value={{ filters, setFilters }}>
      <SearchProvider value={{ searchTerm, setSearchTerm }}>
        <div className={className}>
          <div ref={headerRef} className="guided-experiences-header-container">
            {/* <Header {...{ nextLink, backLink, heading }} /> */}
            <Header {...{ heading }} />
            <SecondaryHeader
              defaultFilters={defaultFilters}
              sortFilterContext={sortFilterContext}
              searchContext={searchContext}
            />
          </div>
          {children}
          <div ref={navRef} className="guided-experiences-nav-container">
            <NavLink
              url="/"
              text="Back to Main Menu"
              iconBefore
              icon={<IconComposer icon="ArrowLeft" />}
            />
          </div>
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
