import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function ArrowRight({
  className,
  size = 24.047,
  fill = "currentColor",
}) {
  const uniqueProps = {
    viewBox: "0 0 24.047 24.047",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Right Arrow icon</title>
      <path
        d="M24.047,10.521H5.786L14.2,2.1,12.023,0,0,12.023,12.023,24.047l2.1-2.1L5.786,13.526h18.26Z"
        transform="translate(24.047 24.047) rotate(180)"
      />
    </svg>
  );
}

ArrowRight.displayName = "SVG.ArrowRight";

ArrowRight.propTypes = {
  ...svgInternalShape,
};
