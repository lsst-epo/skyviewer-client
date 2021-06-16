import PropTypes from "prop-types";
import Link from "next/link";
import IconComposer from "@/svg/IconComposer";
import Bubbles from "@/components/Bubbles";

export default function GuidedExperienceLanding({
  name,
  thumbnail,
  backgroundImage,
  duration,
  complexity,
}) {
  function getComplexityWord(val) {
    if (val === 5) return "Hard";
    if (val >= 3) return "Medium";
    return "Easy";
  }

  return (
    <div
      className="guided-experience-landing-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="background-opacitizer" />
      <div className="guided-experience-landing">
        <h2 className="guided-experience-landing-heading">{name}</h2>
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
              <div className="complexity">{getComplexityWord(complexity)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

GuidedExperienceLanding.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  backgroundImage: PropTypes.string,
  duration: PropTypes.number,
  complexity: PropTypes.number,
};
