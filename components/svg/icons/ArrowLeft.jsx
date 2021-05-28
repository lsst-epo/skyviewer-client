import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function ArrowLeft({
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
      <title>Left Arrow icon</title>
      <path d="M24.047,10.521H5.786L14.2,2.1,12.023,0,0,12.023,12.023,24.047l2.1-2.1L5.786,13.526h18.26Z" />
    </svg>
  );
}

ArrowLeft.displayName = "SVG.ArrowLeft";

ArrowLeft.propTypes = {
  ...svgInternalShape,
};

ArrowLeft.defaultProps = defaultProps;
