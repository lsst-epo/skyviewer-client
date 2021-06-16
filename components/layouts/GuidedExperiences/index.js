import { useState } from "react";
import PropTypes from "prop-types";
import Header from "@/global/GuidedExperienceHeader";
import SecondaryHeader from "@/global/SecondaryHeader";
import NavLink from "@/primitives/NavLink";
import IconComposer from "@/svg/IconComposer";

export default function GuidedExperiencesLayout({
  className,
  heading,
  nextLink,
  backLink,
  defaultFilters,
  guidedExperienceContext,
  sortFilterContext,
  children,
}) {
  const [filters, setFilters] = useState(defaultFilters);
  const [exps, setExps] = useState(null);

  const { Provider: SortFilterProvider } = sortFilterContext;
  const { Provider: ExpsProvider } = guidedExperienceContext;

  return (
    <SortFilterProvider value={{ filters, setFilters }}>
      <ExpsProvider value={{ exps, setExps }}>
        <div className={className}>
          <div>
            <Header {...{ nextLink, backLink, heading }} />
            <SecondaryHeader context={sortFilterContext} />
          </div>
          <div className="children">{children}</div>
          <NavLink
            url="/guided-experiences"
            text="Back to Guided Experiences"
            iconBefore
            icon={<IconComposer icon="ArrowLeft" />}
          />
        </div>
      </ExpsProvider>
    </SortFilterProvider>
  );
}

GuidedExperiencesLayout.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
  nextLink: PropTypes.object,
  backLink: PropTypes.object,
  children: PropTypes.node,
  guidedExperienceContext: PropTypes.object,
  sortFilterContext: PropTypes.object,
  defaultFilters: PropTypes.object,
};
