import { useState } from "react";
import PropTypes from "prop-types";
import Buttonish from "@rubin-epo/epo-react-lib/Buttonish";
import Header from "@/components/global/GuidedExperienceHeader";
import SecondaryHeader from "@/components/global/SecondaryHeader";
import useResizeObserver from "use-resize-observer";

export default function GuidedExperiencesLayout({
  className,
  heading,
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
            <Header {...{ heading }} />
            <SecondaryHeader
              defaultFilters={defaultFilters}
              sortFilterContext={sortFilterContext}
              searchContext={searchContext}
            />
          </div>
          {children}
          <div ref={navRef} className="guided-experiences-nav-container">
            <Buttonish styleAs="tertiary" url="/" text="Back to Main Menu" />
          </div>
        </div>
      </SearchProvider>
    </SortFilterProvider>
  );
}

GuidedExperiencesLayout.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  sortFilterContext: PropTypes.object,
  searchContext: PropTypes.object,
  defaultFilters: PropTypes.object,
};
