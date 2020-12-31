import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Instagram({
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
      <title>Instagram icon</title>
      <defs>
        <clipPath id="clip-path">
          <rect width="52" height="52" fill="none" />
        </clipPath>
      </defs>
      <g transform="translate(26 26)">
        <g transform="translate(-26 -26)" clipPath="url(#clip-path)">
          <path d="M52,26A26,26,0,1,1,26,0,26,26,0,0,1,52,26" fill="#e01a2c" />
          <path
            d="M325.254,287.215a9.274,9.274,0,0,0-9.228-9.315h-13a9.354,9.354,0,0,0-9.322,9.315v13.939a9.343,9.343,0,0,0,9.322,9.3h13a9.263,9.263,0,0,0,9.228-9.3Zm-2.291,13.877a6.891,6.891,0,0,1-6.892,6.892H302.977a6.891,6.891,0,0,1-6.892-6.892V287.173a6.891,6.891,0,0,1,6.892-6.892h13.09a6.891,6.891,0,0,1,6.892,6.892Z"
            transform="translate(-283.518 -268.266)"
            fill="#fff"
          />
          <path
            d="M948.411,431.8a2.011,2.011,0,1,0,2.011,2.011,2.011,2.011,0,0,0-2.011-2.011"
            transform="translate(-913.591 -416.831)"
            fill="#fff"
          />
          <path
            d="M509.663,496.8a8.258,8.258,0,0,0-6.018,2.364A8.767,8.767,0,0,0,501,505.422a8.622,8.622,0,0,0,17.243.031c.111-5.1-3.255-8.5-8.577-8.653m5.671,8.59a5.717,5.717,0,1,1-11.433.031,5.845,5.845,0,0,1,1.761-4.17,5.353,5.353,0,0,1,3.754-1.546h.156c3.682.107,5.834,2.233,5.758,5.685"
            transform="translate(-483.632 -479.578)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
}

Instagram.displayName = "SVG.Instagram";

Instagram.propTypes = {
  ...svgInternalShape,
};

Instagram.defaultProps = defaultProps;
