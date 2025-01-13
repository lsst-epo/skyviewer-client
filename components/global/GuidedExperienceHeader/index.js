import PropTypes from "prop-types";

export default function GuidedExperienceHeader({ heading }) {
  return (
    <header className="guided-experience-header">
      <div className="middle">
        <div className="guided-experience-subheading">Guided Experiences</div>
        <h2 className="guided-experience-heading">{heading}</h2>
      </div>
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
