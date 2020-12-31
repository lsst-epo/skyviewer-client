import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Stopwatch({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 11.563 13.369",
    width: 11.563,
    height: 13.369,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Stopwatch icon</title>
      <path
        d="M4815.5-98.109a5.466,5.466,0,0,0-2.663.69l-.613-.876.94-.659-.625-.892-2.821,1.977.625.892.94-.659.615.879a5.477,5.477,0,0,0-1.891,4.141,5.493,5.493,0,0,0,5.493,5.493A5.493,5.493,0,0,0,4821-92.616,5.493,5.493,0,0,0,4815.5-98.109Zm0,9.263a3.774,3.774,0,0,1-3.77-3.77,3.774,3.774,0,0,1,3.77-3.77,3.775,3.775,0,0,1,3.771,3.77A3.775,3.775,0,0,1,4815.5-88.846Z"
        transform="translate(-4809.722 100.493)"
        fill="#f5f5f5"
      />
      <path
        d="M4825.008-100.08h1.148v-.847h1.148V-102.1h-3.445v1.171h1.148Z"
        transform="translate(-4819.801 102.099)"
        fill="#f5f5f5"
      />
      <path
        d="M4838.547-97.745l.941.659.386-.551.941.658.625-.892-2.823-1.975-.625.892.941.658Z"
        transform="translate(-4829.876 100.493)"
        fill="#f5f5f5"
      />
    </svg>
  );
}

Stopwatch.displayName = "SVG.Stopwatch";

Stopwatch.propTypes = {
  ...svgInternalShape,
};

Stopwatch.defaultProps = defaultProps;
