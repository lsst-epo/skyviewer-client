import PropTypes from "prop-types";
import GuidedExperience from "./GuidedExperienceListItem";

export default function GuidedExperiences({ guidedExperiences, counts }) {
  // console.log("GuidedExps", guidedExperiences);
  return (
    <>
      <h1 className="guided-experiences-heading">Guided Experiences</h1>
      {guidedExperiences && (
        <ul className="guided-experiences">
          {guidedExperiences.map((guidedExperience) => {
            const { id, varietyHandle } = guidedExperience;
            const count = counts[varietyHandle];

            return (
              <GuidedExperience {...guidedExperience} count={count} key={id} />
            );
          })}
        </ul>
      )}
    </>
  );
}

GuidedExperiences.propTypes = {
  guidedExperiences: PropTypes.array,
  counts: PropTypes.object,
};
