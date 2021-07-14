import PropTypes from "prop-types";
import SourceFilter from "./SourceFilter";

export default function SourceFilters({ filters }) {
  return (
    <div className="source-filters">
      {filters.map((filter) => {
        const { label, value } = filter;
        return <SourceFilter key={`${label}-${value}`} {...filter} />;
      })}
    </div>
  );
}

SourceFilters.propTypes = {
  filters: PropTypes.array,
};
