import PropTypes from "prop-types";
import useResizeObserver from "use-resize-observer";
import Buttonish from "@rubin-epo/epo-react-lib/Buttonish";

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
}

GuidedExperienceLayout.propTypes = {
  className: PropTypes.string,
  mobileNextLink: PropTypes.object,
  mobileBackLink: PropTypes.object,
  desktopNextLink: PropTypes.object,
  desktopBackLink: PropTypes.object,
  children: PropTypes.node,
};
