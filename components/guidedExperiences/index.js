import PropTypes from "prop-types";
import GuidedExperience from "./GuidedExperience";

export default function GuidedExperiences({ guidedExperiences }) {
  return (
    <>
      <h1 className="guided-experiences-heading">Guided Experiences</h1>
      <ul className="guided-experiences">
        {guidedExperiences.map((guidedExperience) => {
          const { id } = guidedExperience;

          return <GuidedExperience {...guidedExperience} key={id} />;
        })}
      </ul>
    </>
  );
}

GuidedExperiences.propTypes = {
  guidedExperiences: PropTypes.array.isRequired,
};
