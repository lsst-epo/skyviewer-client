import { useState } from "react";
import PropTypes from "prop-types";
import Bubble from "./Bubble";

export default function Bubbles({ val, max = 5 }) {
  const [range] = useState(Array.from({ length: max }, (_, i) => i + 1));
  return (
    <div className="bubbles">
      {range.map((bubble) => {
        return <Bubble key={bubble} val={val} bubble={bubble} />;
      })}
    </div>
  );
}

Bubbles.propTypes = {
  val: PropTypes.number,
  max: PropTypes.number,
};
