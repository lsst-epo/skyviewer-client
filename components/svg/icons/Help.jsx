import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Help({
  className,
  size = 19.883,
  fill = "currentColor",
}) {
  const uniqueProps = {
    viewBox: "0 0 19.883 19.883",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Help icon</title>
      <g transform="translate(1 1)">
        <path
          d="M20.883,11.941A8.941,8.941,0,1,1,11.941,3a8.941,8.941,0,0,1,8.941,8.941Z"
          transform="translate(-3 -3)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M13.635,12.285a2.682,2.682,0,0,1,5.213.894c0,1.788-2.682,2.682-2.682,2.682"
          transform="translate(-7.295 -6.026)"
          fill="none"
          stroke="#00babc"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M18,25.5h0"
          transform="translate(-9.059 -12.088)"
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

Help.displayName = "SVG.Help";

Help.propTypes = {
  ...svgInternalShape,
};
