import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function GlobeSimple({
  className,
  size = 17.883,
  fill = "currentColor",
}) {
  const uniqueProps = {
    viewBox: "0 0 17.883 17.883",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Globe icon</title>
      <path
        d="M11.933,3a8.941,8.941,0,0,0,0,17.883,9.093,9.093,0,0,0,6.884-3.227,8.7,8.7,0,0,0,2.066-5.714A8.947,8.947,0,0,0,11.933,3Zm6.2,5.365H15.491a13.993,13.993,0,0,0-1.234-3.183A7.18,7.18,0,0,1,18.129,8.365ZM11.941,4.824a12.6,12.6,0,0,1,1.708,3.541H10.234A12.6,12.6,0,0,1,11.941,4.824ZM5.021,13.73a6.994,6.994,0,0,1,0-3.577H8.043a14.767,14.767,0,0,0-.125,1.788,14.767,14.767,0,0,0,.125,1.788Zm.733,1.788H8.392A13.993,13.993,0,0,0,9.626,18.7,7.141,7.141,0,0,1,5.754,15.518ZM8.392,8.365H5.754A7.141,7.141,0,0,1,9.626,5.182,13.993,13.993,0,0,0,8.392,8.365Zm3.55,10.694a12.6,12.6,0,0,1-1.708-3.541h3.416A12.6,12.6,0,0,1,11.941,19.059Zm2.092-5.329H9.849a13.155,13.155,0,0,1-.143-1.788,13.041,13.041,0,0,1,.143-1.788h4.185a13.041,13.041,0,0,1,.143,1.788A13.155,13.155,0,0,1,14.034,13.73Zm.224,4.971a13.993,13.993,0,0,0,1.234-3.183h2.638A7.18,7.18,0,0,1,14.257,18.7ZM15.84,13.73a14.767,14.767,0,0,0,.125-1.788,14.767,14.767,0,0,0-.125-1.788h3.022a6.994,6.994,0,0,1,0,3.577Z"
        transform="translate(-3 -3)"
        fill="#00babc"
      />
    </svg>
  );
}

GlobeSimple.displayName = "SVG.GlobeSimple";

GlobeSimple.propTypes = {
  ...svgInternalShape,
};
