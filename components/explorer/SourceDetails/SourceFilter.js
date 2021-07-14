import PropTypes from "prop-types";

export default function SourceFilter({ label, value }) {
  return (
    <div className="source-filter">
      <span className="source-filter-label">{label}</span>
      <span className="source-filter-value">{value}</span>
    </div>
  );
}

SourceFilter.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};
