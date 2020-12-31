import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Facebook({
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
      <title>Facebook icon</title>
      <defs>
        <clipPath id="clip-path">
          <rect width="52" height="52" fill="none" />
        </clipPath>
      </defs>
      <g transform="translate(26 26)">
        <g transform="translate(-26 -26)" clipPath="url(#clip-path)">
          <path d="M52,26A26,26,0,1,1,26,0,26,26,0,0,1,52,26" fill="#3d5a99" />
          <path
            d="M479.775,314.913V300.128H474.8v-5.762h4.975v-4.25c0-4.933,3.013-7.616,7.412-7.616a41.276,41.276,0,0,1,4.448.225v5.155h-3.051c-2.392,0-2.857,1.137-2.857,2.8v3.682h5.706l-.745,5.762h-4.961v14.785Z"
            transform="translate(-458.34 -272.707)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
}

Facebook.displayName = "SVG.Facebook";

Facebook.propTypes = {
  ...svgInternalShape,
};

Facebook.defaultProps = defaultProps;
