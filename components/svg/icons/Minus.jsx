import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Plus({
  className,
  size = 19.799,
  fill = "currentColor",
}) {
  const uniqueProps = {
    viewBox: "0 0 19.799 19.799",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Plus icon</title>
      <g transform="translate(9.9) rotate(45)">
        <rect
          width="17.951"
          height="1.848"
          transform="translate(0 12.693) rotate(-45)"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

Plus.displayName = "SVG.Plus";

Plus.propTypes = {
  ...svgInternalShape,
};

Plus.defaultProps = defaultProps;
