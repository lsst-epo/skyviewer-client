import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Info({
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
      <title>Info icon</title>
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
          d="M18,21.577V18"
          transform="translate(-9.059 -9.059)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M18,12h0"
          transform="translate(-9.059 -6.635)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

Info.displayName = "SVG.Info";

Info.propTypes = {
  ...svgInternalShape,
};

Info.defaultProps = defaultProps;
