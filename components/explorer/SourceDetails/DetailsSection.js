import PropTypes from "prop-types";
import classnames from "clsx";
import DetailsSectionValue from "./DetailsSectionValue";

export default function DetailsSection({
  label,
  value,
  children,
  isFullWidth,
}) {
  return (
    <div
      className={classnames("source-details-section", {
        "full-width": isFullWidth,
      })}
    >
      <span className="source-details-section-label">{label}:</span>
      {value && !children && <DetailsSectionValue>{value}</DetailsSectionValue>}
      {!value && children}
    </div>
  );
}

DetailsSection.propTypes = {
  isFullWidth: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.node,
  children: PropTypes.node,
};
