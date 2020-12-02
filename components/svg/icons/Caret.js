import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Caret({ className, size = 24, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Caret icon</title>
      <polygon points="15.212 22.283 5.204 12 15.212 1.717 18.796 5.203 12.181 12 18.796 18.797 15.212 22.283" />
    </svg>
  );
}

Caret.displayName = "SVG.Caret";

Caret.propTypes = {
  ...svgInternalShape,
};
