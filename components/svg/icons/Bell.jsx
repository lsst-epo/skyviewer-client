import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Bell({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 18.67 22.065",
    width: 18.67,
    height: 22.065,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Bell icon</title>
      <path
        d="M15.013,7.219a7.668,7.668,0,0,1,1.268.238,5.405,5.405,0,0,1,4.12,5.3v6.769l.494.5.413.415H8.611l.413-.415.494-.5V12.753a5.405,5.405,0,0,1,4.12-5.3,9.39,9.39,0,0,1,1.268-.238m.053-3.844A1.622,1.622,0,0,0,13.313,5.03V5.8a7.151,7.151,0,0,0-5.491,6.951V18.82l-2.2,2.206v1.1H24.3v-1.1L22.1,18.82V12.753A7.151,7.151,0,0,0,16.608,5.8V5.03A1.622,1.622,0,0,0,14.96,3.375Zm2.2,19.858H12.764a2.2,2.2,0,1,0,4.393,0Z"
        transform="translate(-5.625 -3.375)"
      />
    </svg>
  );
}

Bell.displayName = "SVG.Bell";

Bell.propTypes = {
  ...svgInternalShape,
};

Bell.defaultProps = defaultProps;
