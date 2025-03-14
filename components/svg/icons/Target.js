import { svgInternalShape } from "@/components/shapes/svg";
import defaultProps from "./defaultProps";

export default function Target({
  className,
  size = 22,
  fill = "currentColor",
}) {
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
      <title>Target icon</title>
      <path
        d="M11,2.031a8.972,8.972,0,0,1,3.491,17.234A8.972,8.972,0,0,1,7.509,2.735,8.917,8.917,0,0,1,11,2.031M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Z"
        fill="#db2a2a"
      />
      <path
        d="M11,6.909a4.09,4.09,0,1,1-2.893,1.2A4.067,4.067,0,0,1,11,6.909m0-2.031A6.122,6.122,0,1,0,17.122,11,6.122,6.122,0,0,0,11,4.878Z"
        fill="#db2a2a"
      />
      <path
        d="M11,9.757A1.244,1.244,0,1,0,12.243,11,1.242,1.242,0,0,0,11,9.757Z"
        fill="#db2a2a"
      />
      <path d="M18.747,3.253V0L14.683,4.064V7.318Z" fill="#fff" />
      <path d="M18.747,3.253H22L17.936,7.318H14.683Z" fill="#fff" />
      <path
        d="M11,11.44a.451.451,0,0,1-.319-.77l5.427-5.427a.451.451,0,0,1,.638.638l-5.427,5.427A.449.449,0,0,1,11,11.44Z"
        fill="#fff"
      />
    </svg>
  );
}

Target.displayName = "SVG.Target";

Target.propTypes = {
  ...svgInternalShape,
};
