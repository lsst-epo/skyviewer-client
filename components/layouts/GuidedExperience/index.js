import { useState } from "react";
import PropTypes from "prop-types";
import useResizeObserver from "use-resize-observer";
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
  const { ref } = useResizeObserver({
    onResize: ({ height }) => {
      document.documentElement.style.setProperty(
        "--ge-nav-height",
        `${height}px`
      );
    },
  });

  return (
    <div className={className}>
      {children}
      <div ref={ref} className="guided-experience-nav-container">
        <ul className="guided-experience-nav mobile-only">
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
        <ul className="guided-experience-nav desktop-only">
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
