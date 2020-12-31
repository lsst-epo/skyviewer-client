import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Alert({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 18.604 22.421",
    width: 18.604,
    height: 22.421,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Alert icon</title>
      <defs>
        <clipPath id="clip-path">
          <rect width="18.604" height="22.421" fill="none" />
        </clipPath>
      </defs>
      <g transform="translate(5.302 6.39)">
        <g transform="translate(4 4.821)">
          <g transform="translate(-9.302 -11.211)" clipPath="url(#clip-path)">
            <path
              d="M53.246,56.991c0-2.4-2.684-2.391-2.684-2.391s-2.684-.024-2.684,2.391c0,3.074-.549,4.55-.878,4.929h7.125c-.342-.39-.878-1.854-.878-4.929"
              transform="translate(-41.266 -47.939)"
              fill="#ffe266"
            />
            <path
              d="M41.1,117.042h8.576a1.652,1.652,0,0,0-.5-.842H41.6a1.652,1.652,0,0,0-.5.842"
              transform="translate(-36.086 -102.024)"
              fill="#ffe266"
            />
            <path
              d="M76.3,54.6Z"
              transform="translate(-66.992 -47.939)"
              fill="#ffe266"
            />
            <path
              d="M64.8,127.44A1.61,1.61,0,0,0,66.4,126H63.2a1.61,1.61,0,0,0,1.6,1.44"
              transform="translate(-55.49 -110.629)"
              fill="#ffe266"
            />
            <path
              d="M72.042,45.989h0a3.684,3.684,0,0,1,.573.061v-.171a.586.586,0,1,0-1.159,0v.171a3.684,3.684,0,0,1,.573-.061Z"
              transform="translate(-62.733 -39.694)"
              fill="#ffe266"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

Alert.displayName = "SVG.Alert";

Alert.propTypes = {
  ...svgInternalShape,
};

Alert.defaultProps = defaultProps;
