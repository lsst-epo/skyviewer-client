import { useState } from "react";
import PropTypes from "prop-types";
import Header from "@/global/GuidedExperienceHeader";
import SecondaryHeader from "@/global/SecondaryHeader";
import NavLink from "@/primitives/NavLink";
import IconComposer from "@/svg/IconComposer";

export default function GuidedExperienceLayout({
  context,
  className,
  heading,
  nextLink,
  backLink,
  children,
  defaultFilters,
}) {
  const [filters, setFilters] = useState(defaultFilters);

  const { Provider } = context;
  return (
    <Provider value={{ filters, setFilters }}>
      <div className={className}>
        <div>
          <Header {...{ nextLink, backLink, heading }} />
          <SecondaryHeader context={context} />
        </div>
        <div className="children">{children}</div>
        <NavLink
          url="/guided-experiences"
          text="Back to Guided Experiences"
          iconBefore
          icon={<IconComposer icon="ArrowLeft" />}
        />
      </div>
    </Provider>
  );
}

GuidedExperienceLayout.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
  nextLink: PropTypes.object,
  backLink: PropTypes.object,
  children: PropTypes.node,
  context: PropTypes.object,
  defaultFilters: PropTypes.object,
};
