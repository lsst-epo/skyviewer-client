import PropTypes from "prop-types";
import useResizeObserver from "use-resize-observer";
import GuidedExperience from "./GuidedExperienceListItem";

export default function GuidedExperiences({ guidedExperiences, counts }) {
  const { ref } = useResizeObserver({
    onResize: ({ height }) => {
      document.documentElement.style.setProperty(
        "--ge-heading-height",
        `${height}px`
      );
    },
  });

  return (
    <>
      <h1 ref={ref} className="guided-experiences-heading">
        Guided Experiences
      </h1>
      {guidedExperiences && (
        <div className="guided-experiences-list-container">
          <ul className="guided-experiences-list">
            {guidedExperiences.map((guidedExperience) => {
              const { id, varietyHandle } = guidedExperience;
              const count = counts[varietyHandle];

              return (
                <GuidedExperience
                  {...guidedExperience}
                  count={count}
                  key={id}
                />
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

GuidedExperiences.propTypes = {
  guidedExperiences: PropTypes.array,
  counts: PropTypes.object,
};
