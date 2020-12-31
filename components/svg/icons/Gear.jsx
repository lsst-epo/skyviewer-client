import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Gear({
  className,
  size = 21.671,
  fill = "currentColor",
}) {
  const uniqueProps = {
    viewBox: "0 0 21.671 21.671",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Gear icon</title>
      <g transform="translate(1 1)">
        <path
          d="M18.865,16.182A2.682,2.682,0,1,1,16.182,13.5,2.682,2.682,0,0,1,18.865,16.182Z"
          transform="translate(-6.347 -6.347)"
          fill="none"
          stroke="#00babc"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M17.952,14.018a1.475,1.475,0,0,0,.3,1.627l.054.054a1.789,1.789,0,1,1-2.53,2.53l-.054-.054A1.487,1.487,0,0,0,13.2,19.231v.152a1.788,1.788,0,1,1-3.577,0V19.3a1.475,1.475,0,0,0-.966-1.35,1.475,1.475,0,0,0-1.627.3l-.054.054a1.789,1.789,0,1,1-2.53-2.53l.054-.054A1.487,1.487,0,0,0,3.44,13.2H3.288a1.788,1.788,0,1,1,0-3.577h.08a1.475,1.475,0,0,0,1.35-.966,1.475,1.475,0,0,0-.3-1.627L4.37,6.972A1.789,1.789,0,1,1,6.9,4.442l.054.054a1.475,1.475,0,0,0,1.627.3h.072a1.475,1.475,0,0,0,.894-1.35V3.288a1.788,1.788,0,1,1,3.577,0v.08a1.487,1.487,0,0,0,2.521,1.055L15.7,4.37a1.789,1.789,0,1,1,2.53,2.53l-.054.054a1.475,1.475,0,0,0-.3,1.627v.072a1.475,1.475,0,0,0,1.35.894h.152a1.788,1.788,0,1,1,0,3.577H19.3a1.475,1.475,0,0,0-1.35.894Z"
          transform="translate(-1.5 -1.5)"
          fill="none"
          stroke="#00babc"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

Gear.displayName = "SVG.Gear";

Gear.propTypes = {
  ...svgInternalShape,
};

Gear.defaultProps = defaultProps;
