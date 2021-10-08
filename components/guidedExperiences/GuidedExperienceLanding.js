import PropTypes from "prop-types";
import Link from "next/link";
import IconComposer from "@/svg/IconComposer";
import Bubbles from "@/components/Bubbles";

export default function GuidedExperienceLanding({
  title,
  backgroundImage,
  duration,
  complexity,
}) {
  function getTerm(val) {
    if (val <= 2) return "Easy";
    if (val <= 4) return "Medium";
    if (val >= 5) return "Hard";

    return "Medium";
  }

  return (
    <div
      className="guided-experience-landing-container"
      style={{
        backgroundImage: `url(${backgroundImage[0].url})`,
      }}
    >
      <div className="background-opacitizer" />
      <div className="guided-experience-landing">
        <h2 className="guided-experience-landing-heading">{title}</h2>
        <div className="guided-experience-landing-details">
          {duration && (
            <div className="detail duration-details">
              <h3 className="details-heading">Duration</h3>
              <IconComposer icon="Stopwatch" />
              <div className="duration">{duration} min</div>
            </div>
          )}
          {complexity && (
            <div className="detail complexity-details">
              <h3 className="details-heading">Complexity</h3>
              <Bubbles val={complexity} />
              <div className="complexity">{getTerm(complexity)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

GuidedExperienceLanding.propTypes = {
  title: PropTypes.string,
  backgroundImage: PropTypes.array,
  duration: PropTypes.number,
  complexity: PropTypes.number,
};
