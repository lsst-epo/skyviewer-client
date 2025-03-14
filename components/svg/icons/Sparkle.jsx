import { svgInternalShape } from "@/components/shapes/svg";
import defaultProps from "./defaultProps";

export default function Sparkle({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 23.112 22.908",
    width: 23.112,
    height: 22.908,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Sparkle icon</title>
      <path
        d="M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z"
        transform="translate(-6.444 -5.076)"
        fill="#00babc"
      />
    </svg>
  );
}

Sparkle.displayName = "SVG.Sparkle";

Sparkle.propTypes = {
  ...svgInternalShape,
};
