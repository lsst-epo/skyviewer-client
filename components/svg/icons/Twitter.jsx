import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Twitter({
  className,
  size = 52,
  fill = "currentColor",
}) {
  const uniqueProps = {
    viewBox: "0 0 52 52",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Twitter icon</title>
      <defs>
        <clipPath id="clip-path">
          <rect width="52" height="52" fill="none" />
        </clipPath>
      </defs>
      <g transform="translate(26 26)">
        <g transform="translate(-26 -26)" clipPath="url(#clip-path)">
          <path d="M52,26A26,26,0,1,1,26,0,26,26,0,0,1,52,26" fill="#38a8e0" />
          <path
            d="M413.849,480.992q.014.336.014.676A14.85,14.85,0,0,1,391,494.179a10.539,10.539,0,0,0,7.731-2.163,5.228,5.228,0,0,1-4.878-3.626,5.231,5.231,0,0,0,2.357-.09,5.224,5.224,0,0,1-4.188-5.12v-.066a5.2,5.2,0,0,0,2.364.652,5.228,5.228,0,0,1-1.615-6.971,14.833,14.833,0,0,0,10.764,5.457,5.224,5.224,0,0,1,8.9-4.763,10.449,10.449,0,0,0,3.318-1.269,5.238,5.238,0,0,1-2.295,2.888,10.453,10.453,0,0,0,3-.822,10.619,10.619,0,0,1-2.607,2.7"
            transform="translate(-377.445 -459.339)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
}

Twitter.displayName = "SVG.Twitter";

Twitter.propTypes = {
  ...svgInternalShape,
};

Twitter.defaultProps = defaultProps;
