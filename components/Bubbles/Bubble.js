import PropTypes from "prop-types";
import classnames from "classnames";

export default function Bubble({ val, bubble }) {
  return (
    <div
      key={bubble}
      className={classnames("bubble", {
        full: val >= bubble,
      })}
    />
  );
}

Bubble.propTypes = {
  val: PropTypes.number,
  bubble: PropTypes.number,
};
