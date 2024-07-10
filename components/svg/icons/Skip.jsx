import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Plus({
  className,
  size = 8.328,
  fill = "currentColor",
}) {
  const uniqueProps = {
    viewBox: "0 0 8.328 8.328",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Plus icon</title>
      <g transform="translate(-4.5 -4.5)">
        <path d="M4.5,4.5v8.328L9.47,8.664Z" fill="#d9d9d9" />
        <path
          d="M27,4.5h2.014v8.328H27Z"
          transform="translate(-16.186)"
          fill="#d9d9d9"
        />
      </g>
    </svg>
  );
}

Plus.displayName = "SVG.Plus";

Plus.propTypes = {
  ...svgInternalShape,
};
