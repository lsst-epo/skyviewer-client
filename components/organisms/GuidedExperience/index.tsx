"use client";
import { FunctionComponent, PropsWithChildren } from "react";
import useResizeObserver from "use-resize-observer";
import Buttonish from "@rubin-epo/epo-react-lib/Buttonish";

type Link = {
  url: string;
  text: string;
};

interface GuidedExperienceProps {
  className?: string;
  mobileNextLink: Link;
  mobileBackLink: Link;
  desktopNextLink: Link;
  desktopBackLink: Link;
}

const GuidedExperience: FunctionComponent<
  PropsWithChildren<GuidedExperienceProps>
> = ({
  className,
  mobileNextLink,
  mobileBackLink,
  desktopNextLink,
  desktopBackLink,
  children,
}) => {
  const { ref } = useResizeObserver<HTMLDivElement>({
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
              <Buttonish
                styleAs="tertiary"
                url={mobileBackLink.url}
                text={mobileBackLink.text}
                isBlock
              />
            </li>
          )}
          {mobileNextLink && (
            <li className="guided-experience-nav-item">
              <Buttonish
                url={mobileNextLink.url}
                text={mobileNextLink.text}
                isBlock
              />
            </li>
          )}
        </ul>
        <ul className="guided-experience-nav desktop-only">
          {desktopBackLink && (
            <li className="guided-experience-nav-item">
              <Buttonish
                styleAs="tertiary"
                url={desktopBackLink.url}
                text={desktopBackLink.text}
              />
            </li>
          )}
          {desktopNextLink && (
            <li className="guided-experience-nav-item">
              <Buttonish
                url={desktopNextLink.url}
                text={desktopNextLink.text}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default GuidedExperience;
