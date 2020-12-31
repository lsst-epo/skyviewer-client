import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Sort({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 21.124 14.082",
    width: 21.124,
    height: 14.082,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Sort icon</title>
      <path
        d="M4.5,23.082h7.041V20.735H4.5ZM4.5,9v2.347H25.624V9Zm0,8.215H18.582V14.868H4.5Z"
        transform="translate(-4.5 -9)"
        fill="#f5f5f5"
      />
    </svg>
  );
}

Sort.displayName = "SVG.Sort";

Sort.propTypes = {
  ...svgInternalShape,
};

Sort.defaultProps = defaultProps;
