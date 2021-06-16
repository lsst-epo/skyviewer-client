import PropTypes from "prop-types";
import Bubble from "./Bubble";

export default function Bubbles({ val }) {
  return (
    <div className="bubbles">
      {[1, 2, 3, 4, 5].map((bubble) => {
        return <Bubble key={bubble} val={val} bubble={bubble} />;
      })}
    </div>
  );
}

Bubbles.propTypes = {
  val: PropTypes.number,
};
