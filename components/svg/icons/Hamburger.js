import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Hamburger({
  className,
  size = 22,
  fill = "currentColor",
}) {
  const uniqueProps = {
    viewBox: "0 0 22 22",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Mobile menu (hamburger) icon</title>
      <g transform="translate(1.5 1.5)">
        <path
          d="M4.5,18h22"
          transform="translate(-4.5 -10.667)"
          fill="none"
          stroke="#f5f5f5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M4.5,9h22"
          transform="translate(-4.5 -9)"
          fill="none"
          stroke="#f5f5f5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M4.5,27h22"
          transform="translate(-4.5 -12.333)"
          fill="none"
          stroke="#f5f5f5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
}

Hamburger.displayName = "SVG.Hamburger";

Hamburger.propTypes = {
  ...svgInternalShape,
};
