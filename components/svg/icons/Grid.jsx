import { svgInternalShape } from "@/components/shapes/svg";
import defaultProps from "./defaultProps";

export default function Grid({ className, size = 22, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 22 22",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Grid icon</title>
      <path
        d="M11,0,0,11,11,22,22,11Zm.237,7.491L14.39,4.339,17.661,7.61l-3.153,3.153ZM14.271,11,11,14.271,7.729,11,11,7.729ZM11,.949,14.152,4.1,11,7.254,7.847,4.1Zm-.237,6.542L7.491,10.763,4.339,7.61,7.61,4.339ZM7.254,11,4.1,14.152.949,11,4.1,7.847Zm.237.237,3.272,3.271L7.61,17.661,4.339,14.39ZM11,21.051,7.847,17.9,11,14.746,14.152,17.9Zm.237-6.543,3.271-3.271,3.153,3.153L14.39,17.661ZM14.746,11,17.9,7.847,21.051,11,17.9,14.152Z"
        fill="#fff"
      />
    </svg>
  );
}

Grid.displayName = "SVG.Grid";

Grid.propTypes = {
  ...svgInternalShape,
};
