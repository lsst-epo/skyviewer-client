import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Nebula({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 14 6.793",
    width: 14,
    height: 6.793,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Nebula icon</title>
      <path
        d="M541.942,715.341h-.654a2.338,2.338,0,0,0-3.7-1.42,3.271,3.271,0,0,0-6.364.878,1.851,1.851,0,0,0,.144,3.7h10.572a1.577,1.577,0,1,0,0-3.154Z"
        transform="translate(-529.519 -711.702)"
        fill="#fff"
      />
    </svg>
  );
}

Nebula.displayName = "SVG.Nebula";

Nebula.propTypes = {
  ...svgInternalShape,
};

Nebula.defaultProps = defaultProps;
