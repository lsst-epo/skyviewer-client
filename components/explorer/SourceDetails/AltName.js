import PropTypes from "prop-types";

export default function AltName({ label, name }) {
  return (
    <div className="source-alt-name">
      <span className="source-alt-name-label">{label}:</span>
      <span>{name}</span>
    </div>
  );
}

AltName.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};
