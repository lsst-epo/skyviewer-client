import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function SearchSimple({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 14.08 14.082",
    width: 14.08,
    height: 14.082,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Search icon</title>
      <path
        d="M13.888,12.175,11.147,9.433a.66.66,0,0,0-.468-.193h-.448a5.718,5.718,0,1,0-.99.99v.448a.66.66,0,0,0,.193.468l2.742,2.742a.657.657,0,0,0,.932,0l.778-.778a.663.663,0,0,0,0-.935ZM5.72,9.241a3.52,3.52,0,1,1,3.52-3.52A3.518,3.518,0,0,1,5.72,9.241Z"
        fill="#f5f5f5"
      />
    </svg>
  );
}

SearchSimple.displayName = "SVG.SearchSimple";

SearchSimple.propTypes = {
  ...svgInternalShape,
};

SearchSimple.defaultProps = defaultProps;
