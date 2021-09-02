import PropTypes from "prop-types";
import IconComposer from "@/svg/IconComposer";
import NavLink from "./NavLink";

export default function GuidedExperienceHeader({
  backLink = {},
  nextLink = {},
  heading,
  children,
}) {
  return (
    <header className="guided-experience-header">
      {/* <NavLink
        url={backLink.url}
        classes="guided-experience-link back"
        icon={<IconComposer icon="CaretLeft" />}
        text={backLink.text || "Previous Guided Experience"}
      /> */}
      <div className="middle">
        <div className="guided-experience-subheading">Guided Experiences</div>
        <h2 className="guided-experience-heading">{heading}</h2>
      </div>
      {/* <NavLink
        url={nextLink.url}
        classes="guided-experience-link next"
        icon={<IconComposer icon="CaretRight" />}
        text={nextLink.text || "Next Guided Experience"}
      /> */}
    </header>
  );
}

GuidedExperienceHeader.propTypes = {
  backLink: PropTypes.object,
  nextLink: PropTypes.object,
  route: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.string,
};
