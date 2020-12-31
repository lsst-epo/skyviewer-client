import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Galaxy({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 9.899 12.939",
    width: 9.899,
    height: 12.939,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Galaxy icon</title>
      <g id="galaxy-icon" transform="translate(0.5 0.509)">
        <path
          id="Union_1"
          data-name="Union 1"
          d="M2.273,11.93a5.539,5.539,0,0,1-.789-.073.212.212,0,0,1-.168-.246.2.2,0,0,1,.235-.177,5.185,5.185,0,0,0,.729.065.214.214,0,0,1,.2.219.208.208,0,0,1-.206.212Zm.66-.239a.213.213,0,0,1,.178-.242c.1-.015.212-.035.313-.058a.2.2,0,0,1,.242.166.212.212,0,0,1-.157.254,3.421,3.421,0,0,1-.342.062.071.071,0,0,1-.028,0A.217.217,0,0,1,2.933,11.691ZM.519,11.607c-.11-.038-.22-.081-.322-.127A.217.217,0,0,1,.083,11.2a.2.2,0,0,1,.269-.115c.1.042.2.081.3.115a.22.22,0,0,1,.129.273.211.211,0,0,1-.194.146A.207.207,0,0,1,.519,11.607ZM4.845,11.1a.217.217,0,0,1,.076-.292A5.16,5.16,0,0,0,6.173,9.782a4.389,4.389,0,0,0,.8-1.277,3.607,3.607,0,0,0,.279-1.47,2.716,2.716,0,0,0-.437-1.389,2.326,2.326,0,0,0-1.1-.931,1.775,1.775,0,0,0-1.441.108,1.573,1.573,0,0,0-.812.958.2.2,0,0,1-.257.142.218.218,0,0,1-.136-.266,1.99,1.99,0,0,1,1.021-1.22A2.17,2.17,0,0,1,5.853,4.31,2.724,2.724,0,0,1,7.155,5.4a3.205,3.205,0,0,1,.507,1.62A4.069,4.069,0,0,1,7.35,8.67a4.778,4.778,0,0,1-.877,1.4,5.648,5.648,0,0,1-1.349,1.108.259.259,0,0,1-.1.027A.2.2,0,0,1,4.845,11.1ZM8.08,9.852a.216.216,0,0,1-.113-.281A5.93,5.93,0,0,0,8.286,5.68a3.542,3.542,0,0,0-1.1-1.628,3.034,3.034,0,0,0-.837-.5,2.422,2.422,0,0,0-.939-.173.216.216,0,0,1,0-.431,2.842,2.842,0,0,1,1.089.2,3.534,3.534,0,0,1,.947.566A4.007,4.007,0,0,1,8.675,5.542a6.361,6.361,0,0,1-.326,4.191.209.209,0,0,1-.2.135A.18.18,0,0,1,8.08,9.852ZM2,9.652a.73.73,0,0,1-.2-.5.716.716,0,0,1,.2-.5.65.65,0,0,1,.945,0,.726.726,0,0,1,0,.993.65.65,0,0,1-.945,0Zm.29-.689a.284.284,0,0,0,0,.381.245.245,0,0,0,.184.081.248.248,0,0,0,.183-.081.28.28,0,0,0,0-.381.263.263,0,0,0-.183-.081A.26.26,0,0,0,2.292,8.963ZM3.446,9.6a.213.213,0,0,1-.194-.227.215.215,0,0,1,.217-.2,2.4,2.4,0,0,0,1.867-.758A.2.2,0,0,1,5.629,8.4a.219.219,0,0,1,0,.3,2.788,2.788,0,0,1-2.039.9C3.542,9.6,3.494,9.6,3.446,9.6Zm-1.93-.789A3.764,3.764,0,0,1,.352,7.262,4.45,4.45,0,0,1,0,5.311,5.675,5.675,0,0,1,1.788,1.59a.2.2,0,0,1,.29.015.222.222,0,0,1-.015.3A5.21,5.21,0,0,0,.417,5.334,3.975,3.975,0,0,0,.725,7.089,3.352,3.352,0,0,0,1.759,8.463a.226.226,0,0,1,.048.3.214.214,0,0,1-.169.089A.19.19,0,0,1,1.517,8.809ZM3.723,8.1A2.233,2.233,0,0,1,2.391,7.52a3.259,3.259,0,0,1-.91-2.763A4.977,4.977,0,0,1,2.716,2.14,6.637,6.637,0,0,1,4.532.662c.181-.1.367-.192.555-.273A.2.2,0,0,1,5.356.5a.222.222,0,0,1-.112.281,5.626,5.626,0,0,0-.517.258A6.2,6.2,0,0,0,3.021,2.429,4.629,4.629,0,0,0,1.887,4.811,3.11,3.11,0,0,0,2,6.123,2.42,2.42,0,0,0,2.662,7.2a1.838,1.838,0,0,0,1.247.473,1.942,1.942,0,0,0,1.009-.285,1.417,1.417,0,0,0,.689-1.1,1.223,1.223,0,0,0-.426-1.031.225.225,0,0,1-.029-.3.2.2,0,0,1,.29-.027,1.665,1.665,0,0,1,.576,1.4,1.861,1.861,0,0,1-.892,1.435A2.352,2.352,0,0,1,3.905,8.1C3.844,8.1,3.781,8.1,3.723,8.1Zm.183-1.859a.674.674,0,1,1,.675.708A.689.689,0,0,1,3.905,6.238Zm-1-1.539a.221.221,0,0,1-.1-.289,2.364,2.364,0,0,1,1.647-1.3.211.211,0,0,1,.239.173.214.214,0,0,1-.166.25A1.943,1.943,0,0,0,3.179,4.6.2.2,0,0,1,3,4.722.18.18,0,0,1,2.907,4.7ZM7.328,2.625a.593.593,0,1,1,.595.62A.606.606,0,0,1,7.328,2.625Zm.411,0a.182.182,0,1,0,.184-.193A.186.186,0,0,0,7.739,2.625ZM5.527.439A.215.215,0,0,1,5.663.17C5.853.1,6.055.05,6.25,0A.209.209,0,0,1,6.5.17a.217.217,0,0,1-.157.258c-.184.042-.37.092-.554.15a.188.188,0,0,1-.062.012A.2.2,0,0,1,5.527.439Z"
          transform="translate(0 0)"
          fill="#fff"
          stroke="rgba(0,0,0,0)"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}

Galaxy.displayName = "SVG.Galaxy";

Galaxy.propTypes = {
  ...svgInternalShape,
};

Galaxy.defaultProps = defaultProps;
