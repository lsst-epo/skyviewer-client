import { useState } from "react";
import PropTypes from "prop-types";
import Header from "@/global/GuidedExperienceHeader";
import SecondaryHeader from "@/global/SecondaryHeader";
import NavLink from "@/primitives/NavLink";
import IconComposer from "@/svg/IconComposer";

export default function GuidedExperienceLayout({
  className,
  mobileNextLink,
  mobileBackLink,
  desktopNextLink,
  desktopBackLink,
  children,
}) {
  return (
    <div className={className}>
      <div className="children">{children}</div>
      <div className="guided-experience-nav-container mobile-only">
        <ul className="guided-experience-nav">
          {mobileBackLink && (
            <li className="guided-experience-nav-item">
              <NavLink
                url={mobileBackLink.url}
                text={mobileBackLink.text}
                iconBefore
                small
                icon={<IconComposer icon="ArrowLeft" />}
              />
            </li>
          )}
          {mobileNextLink && (
            <li className="guided-experience-nav-item">
              <NavLink
                url={mobileNextLink.url}
                text={mobileNextLink.text}
                iconAfter
                small
                icon={<IconComposer icon="ArrowRight" />}
              />
            </li>
          )}
        </ul>
      </div>
      <div className="guided-experience-nav-container desktop-only">
        <ul className="guided-experience-nav">
          {desktopBackLink && (
            <li className="guided-experience-nav-item">
              <NavLink
                url={desktopBackLink.url}
                text={desktopBackLink.text}
                iconBefore
                small
                icon={<IconComposer icon="ArrowLeft" />}
              />
            </li>
          )}
          {desktopNextLink && (
            <li className="guided-experience-nav-item">
              <NavLink
                url={desktopNextLink.url}
                text={desktopNextLink.text}
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
  mobileNextLink: PropTypes.object,
  mobileBackLink: PropTypes.object,
  desktopNextLink: PropTypes.object,
  desktopBackLink: PropTypes.object,
  children: PropTypes.node,
};
