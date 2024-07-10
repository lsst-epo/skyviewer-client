import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Suitcase({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 18.836 17.894",
    width: 18.836,
    height: 17.894,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Suitcase icon</title>
      <path
        d="M19.952,6.767H17.127V4.884A1.877,1.877,0,0,0,15.243,3H9.592A1.877,1.877,0,0,0,7.709,4.884V6.767H4.884A1.877,1.877,0,0,0,3,8.651V19.01a1.877,1.877,0,0,0,1.884,1.884H19.952a1.877,1.877,0,0,0,1.884-1.884V8.651A1.877,1.877,0,0,0,19.952,6.767ZM9.592,4.884h5.651V6.767H9.592ZM19.952,19.01H4.884V17.127H19.952Zm0-4.709H4.884V8.651H7.709v1.884H9.592V8.651h5.651v1.884h1.884V8.651h2.825Z"
        transform="translate(-3 -3)"
        fill="#00babc"
      />
    </svg>
  );
}

Suitcase.displayName = "SVG.Suitcase";

Suitcase.propTypes = {
  ...svgInternalShape,
};
