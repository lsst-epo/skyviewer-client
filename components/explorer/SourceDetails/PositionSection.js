import PropTypes from "prop-types";
import classnames from "clsx";
import DetailsSection from "./DetailsSection";
import DetailsSectionValue from "./DetailsSectionValue";
import PositionSectionPosition from "./PositionSectionPosition";

export default function PositionSection({ position }) {
  return (
    <DetailsSection isFullWidth label="Position">
      <DetailsSectionValue isFlex>
        <PositionSectionPosition label="RA" value={position[0]} />
        <PositionSectionPosition label="Dec" value={position[1]} />
      </DetailsSectionValue>
    </DetailsSection>
  );
}

PositionSection.propTypes = {
  position: PropTypes.array,
};
