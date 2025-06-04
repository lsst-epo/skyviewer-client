import defaultProps from "./defaultProps";
import { svgInternalShape } from "@/components/shapes/svg";

export default function Filters({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 22 17.056",
    width: 22,
    height: 17.056,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Filters icon</title>
      <path
        d="M16.719,2.049a2.377,2.377,0,0,0-4.709,0H0v.7H12.01a2.377,2.377,0,0,0,4.709,0H22v-.7Z"
        fill="#fff"
      />
      <path
        d="M7.367,8.283a2.386,2.386,0,0,0-2.354,2.048H0v.7H5.013a2.377,2.377,0,0,0,4.709,0H22v-.7H9.722A2.387,2.387,0,0,0,7.367,8.283Z"
        transform="translate(0 -2.156)"
        fill="#fff"
      />
      <path
        d="M12.343,16.565a2.387,2.387,0,0,0-2.354,2.049H0v.7H9.989a2.377,2.377,0,0,0,4.709,0H22v-.7H14.7A2.387,2.387,0,0,0,12.343,16.565Z"
        transform="translate(0 -4.311)"
        fill="#fff"
      />
    </svg>
  );
}

Filters.displayName = "SVG.Filters";

Filters.propTypes = {
  ...svgInternalShape,
};
