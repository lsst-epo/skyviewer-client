import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function InfoFull({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 67 67",
    width: 67,
    height: 67,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Info icon</title>
      <path
        d="M33.5,0A33.5,33.5,0,1,0,67,33.5,33.5,33.5,0,0,0,33.5,0Zm5.264,52.859-.879,2.133c-12.21,4.592-16.09-2.261-13.6-8.3l5.169-12.549c1.056-2.564.727-5.055-5.463-5.313l.879-2.133c12.21-4.593,16.09,2.261,13.6,8.3L33.3,47.545C32.245,50.11,32.574,52.6,38.764,52.859Zm5.747-34a6.211,6.211,0,1,1-4.259-7.683A6.211,6.211,0,0,1,44.511,18.856Z"
        fill="#f5f5f5"
      />
    </svg>
  );
}

InfoFull.displayName = "SVG.InfoFull";

InfoFull.propTypes = {
  ...svgInternalShape,
};

InfoFull.defaultProps = defaultProps;
