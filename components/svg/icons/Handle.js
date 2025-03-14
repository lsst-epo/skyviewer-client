import { svgInternalShape } from "@/components/shapes/svg";
import defaultProps from "./defaultProps";

export default function Handle({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 26 35.75",
    width: 26,
    height: 35.75,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Slider Handle</title>
      <path
        d="M0,0V18.5"
        transform="translate(12.5 2)"
        fill="none"
        stroke="#f5f5f5"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <g
        transform="translate(0 9.75)"
        fill="#009fa1"
        stroke="#f5f5f5"
        strokeWidth="4"
      >
        <circle cx="13" cy="13" r="13" stroke="none" />
        <circle cx="13" cy="13" r="11" fill="none" />
      </g>
    </svg>
  );
}

Handle.displayName = "SVG.Handle";

Handle.propTypes = {
  ...svgInternalShape,
};
