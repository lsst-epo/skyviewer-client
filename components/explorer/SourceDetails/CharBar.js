import PropTypes from "prop-types";
import classnames from "clsx";

export default function CharBar({ range, value, labels }) {
  function getCharacteristicPos(val, range) {
    const [min, max] = range;
    return { left: `${(val / (max - min)) * 100}%` };
  }

  return (
    <div className="source-char-bar-wrapper">
      <div className="source-char-bar-labels">
        {labels.map((label) => {
          return (
            <span key={label} className="source-char-bar-label">
              {label}
            </span>
          );
        })}
      </div>
      <div className="source-char-bar">
        <span
          className="char-bar-val"
          style={getCharacteristicPos(value, range)}
        />
      </div>
    </div>
  );
}

CharBar.propTypes = {
  range: PropTypes.array,
  labels: PropTypes.array,
  value: PropTypes.number,
};
