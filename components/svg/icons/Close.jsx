import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Close({ className, size = 36, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 36 36",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Close icon</title>
      <path d="M19,1.773,17.227,0,9.5,7.727,1.773,0,0,1.773,7.727,9.5,0,17.227,1.773,19,9.5,11.273,17.227,19,19,17.227,11.273,9.5Z" />
    </svg>
  );
}

Close.displayName = "SVG.Close";

Close.propTypes = {
  ...svgInternalShape,
};

Close.defaultProps = defaultProps;
