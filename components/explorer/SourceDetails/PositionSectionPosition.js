import PropTypes from "prop-types";
import classnames from "clsx";
import DetailsSection from "./DetailsSection";

export default function PositionSectionPosition({ value, label }) {
  function roundedToPlace(val, place = 100000) {
    return Math.round(place * val) / place;
  }

  return (
    <>
      <span className="source-details-section-label">{label}: </span>
      <span>{roundedToPlace(value)}</span>
    </>
  );
}

PositionSectionPosition.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};
