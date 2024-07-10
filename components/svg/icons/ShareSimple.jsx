import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function ShareSimple({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 16.306 19.883",
    width: 16.306,
    height: 19.883,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Share icon</title>
      <g transform="translate(1 1)">
        <path
          d="M6,18v7.153a1.788,1.788,0,0,0,1.788,1.788h10.73a1.788,1.788,0,0,0,1.788-1.788V18"
          transform="translate(-6 -9.059)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M19.153,6.577,15.577,3,12,6.577"
          transform="translate(-8.423 -3)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M18,3V14.624"
          transform="translate(-10.847 -3)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

ShareSimple.displayName = "SVG.ShareSimple";

ShareSimple.propTypes = {
  ...svgInternalShape,
};
