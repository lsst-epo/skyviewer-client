import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Pin({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 13.503 19.791",
    width: 13.503,
    height: 19.791,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Pin icon</title>
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_2863"
            data-name="Rectangle 2863"
            width={mergedSvgProps.width}
            height={mergedSvgProps.height}
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="landmark-icon" transform="translate(6.752 9.895)">
        <g
          id="Group_3526"
          data-name="Group 3526"
          transform="translate(-6.752 -9.895)"
          clipPath="url(#clip-path)"
        >
          <path
            id="Path_928894"
            data-name="Path 928894"
            d="M6.752,0A6.752,6.752,0,0,0,0,6.752c0,.062,0,.124,0,.184.111,7.375,6.749,12.855,6.749,12.855s6.639-5.48,6.749-12.855c0-.062,0-.122,0-.184A6.752,6.752,0,0,0,6.752,0m0,10.4A3.647,3.647,0,1,1,10.4,6.752,3.647,3.647,0,0,1,6.752,10.4"
            fill="#ed4c4c"
          />
          <path
            id="Path_928895"
            data-name="Path 928895"
            d="M146.164,142.682a3.682,3.682,0,1,0-3.682,3.682,3.682,3.682,0,0,0,3.682-3.682"
            transform="translate(-135.73 -135.926)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
}

Pin.displayName = "SVG.Pin";

Pin.propTypes = {
  ...svgInternalShape,
};
