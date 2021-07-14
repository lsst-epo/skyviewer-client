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
        <path
          d="M14,1.306,12.693,0,7,5.693,1.306,0,0,1.306,5.693,7,0,12.693,1.306,14,7,8.306,12.693,14,14,12.693,8.306,7Z"
          transform="translate(0 0)"
          fill={fill}
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
