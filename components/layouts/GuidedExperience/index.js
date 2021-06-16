import { useState } from "react";
import PropTypes from "prop-types";
import Header from "@/global/GuidedExperienceHeader";
import SecondaryHeader from "@/global/SecondaryHeader";
import NavLink from "@/primitives/NavLink";
import IconComposer from "@/svg/IconComposer";

export default function GuidedExperienceLayout({
  className,
  nextLink,
  backLink,
  children,
}) {
  return (
    <div className={className}>
      <div className="children">{children}</div>
      <div className="guided-experience-nav-container">
        <ul className="guided-experience-nav">
          {backLink && (
            <li className="guided-experience-nav-item">
              <NavLink
                url={backLink.url}
                text={backLink.text}
                iconBefore
                small
                icon={<IconComposer icon="ArrowLeft" />}
              />
            </li>
          )}
          {nextLink && (
            <li className="guided-experience-nav-item">
              <NavLink
                url={nextLink.url}
                text={nextLink.text}
                iconAfter
                small
                icon={<IconComposer icon="ArrowRight" />}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

GuidedExperienceLayout.propTypes = {
  className: PropTypes.string,
  nextLink: PropTypes.object,
  backLink: PropTypes.object,
  children: PropTypes.node,
};
