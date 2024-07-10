import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Stopwatch({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 22.563 26.369",
    width: 22.563,
    height: 26.369,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Stopwatch icon</title>
      <path
        d="M4821-96.42a10.574,10.574,0,0,0-5.2,1.361l-1.2-1.728,1.835-1.3-1.219-1.759-5.506,3.9,1.219,1.759,1.835-1.3,1.2,1.734a10.85,10.85,0,0,0-3.69,8.168A10.776,10.776,0,0,0,4821-74.752a10.776,10.776,0,0,0,10.718-10.834A10.776,10.776,0,0,0,4821-96.42Zm0,18.271a7.4,7.4,0,0,1-7.356-7.437A7.4,7.4,0,0,1,4821-93.023a7.406,7.406,0,0,1,7.357,7.437A7.406,7.406,0,0,1,4821-78.15Z"
        transform="translate(-4809.722 101.122)"
      />
      <path
        d="M4826.1-98.117h2.24v-1.671h2.241v-2.31h-6.723v2.31h2.241Z"
        transform="translate(-4815.94 102.099)"
      />
      <path
        d="M4839.075-95.7l1.836,1.3.754-1.087,1.836,1.3,1.219-1.76-5.508-3.9-1.219,1.76,1.836,1.3Z"
        transform="translate(-4822.156 101.122)"
      />
    </svg>
  );
}

Stopwatch.displayName = "SVG.Stopwatch";

Stopwatch.propTypes = {
  ...svgInternalShape,
};
