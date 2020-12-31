import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Caret({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 111.503 22.073",
    width: 11.503,
    height: 22.073,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Caret icon</title>
      <path
        d="M1.5,21.652,9.9,11.576,1.5,1.5"
        transform="translate(-0.348 -0.54)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokWidth="3"
      />
    </svg>
  );
}

Caret.displayName = "SVG.Caret";

Caret.propTypes = {
  ...svgInternalShape,
};

Caret.defaultProps = defaultProps;
