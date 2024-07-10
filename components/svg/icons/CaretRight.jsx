import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function CaretRight({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 29.081 60.485",
    width: 29.081,
    height: 60.485,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Right Caret icon</title>
      <path
        d="M1.5,59.994,27.454,30.747,1.5,1.5"
        transform="translate(-0.378 -0.504)"
        fill="none"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

CaretRight.displayName = "SVG.CaretRight";

CaretRight.propTypes = {
  ...svgInternalShape,
};
