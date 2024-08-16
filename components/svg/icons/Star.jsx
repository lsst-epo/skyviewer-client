import PropTypes from "prop-types";
import { svgInternalShape } from "@/components/shapes/svg";
import defaultProps from "./defaultProps";

export default function Star({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 38.375 33.846",
    width: 38.375,
    height: 33.846,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Star icon</title>
      <g transform="translate(0 0)">
        <path
          d="M19.188,0,23.7,12.954l14.679-.026-11.892,7.98,4.563,12.938L19.188,25.823,7.329,33.846l4.563-12.938L0,12.928l14.679.026Z"
          transform="translate(0 0)"
          fill="#f5f5f5"
        />
      </g>
    </svg>
  );
}

Star.displayName = "SVG.Star";

Star.propTypes = {
  ...svgInternalShape,
};
