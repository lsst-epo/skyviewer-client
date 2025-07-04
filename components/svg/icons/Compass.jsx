import defaultProps from "./defaultProps";
import { svgInternalShape } from "@/components/shapes/svg";

export default function Compass({
  className,
  size = 20,
  fill = "currentColor",
}) {
  const uniqueProps = {
    viewBox: "0 0 26 30.79",
    width: 26,
    height: 30.79,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Compass icon</title>
      <g transform="translate(26 30.79) rotate(180)">
        <path
          d="M2795.624,2385.632h-.59q0,.129,0,.255a8.7,8.7,0,0,1-3.325.952,54.068,54.068,0,0,1-6.705.55c.013-.577.019-1.164.019-1.757a60.349,60.349,0,0,0-.584-8.933,14.821,14.821,0,0,0-.642-2.737c-.28-.754-.595-1.12-.96-1.12v.4c.242,0,.769.741,1.207,3.519a60.06,60.06,0,0,1,.579,8.871c0,.6-.007,1.187-.019,1.767-.581.013-1.171.02-1.767.02a59.957,59.957,0,0,1-8.872-.58,8.7,8.7,0,0,1-3.325-.952q0-.126,0-.255h-.8a13,13,0,1,0,26,0Zm-17.539,11.242a12.191,12.191,0,0,1-7.429-10.506,4.111,4.111,0,0,0,.507.225,14.852,14.852,0,0,0,2.737.641,60.315,60.315,0,0,0,8.934.585c.593,0,1.18-.007,1.757-.02a54.107,54.107,0,0,1-.55,6.7,8.708,8.708,0,0,1-.952,3.326l-.255,0A12.128,12.128,0,0,1,2778.085,2396.874Zm15.99-6.493a12.187,12.187,0,0,1-10.506,7.43,3.947,3.947,0,0,0,.225-.508,14.816,14.816,0,0,0,.642-2.737,54.59,54.59,0,0,0,.555-6.776,54.407,54.407,0,0,0,6.777-.556,14.852,14.852,0,0,0,2.737-.641,4.111,4.111,0,0,0,.507-.225A12.1,12.1,0,0,1,2794.075,2390.381Z"
          transform="translate(-2769.834 -2372.842)"
          fill="#fff"
        />
      </g>
      <g transform="translate(11)">
        <path
          d="M966.531,351.056H965.3l-1.992-3.489h-.028q.059.924.059,1.319v2.17h-.867v-4.612h1.224l1.989,3.454h.022q-.047-.9-.047-1.271v-2.183h.874Z"
          transform="translate(-962.469 -346.444)"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

Compass.displayName = "SVG.Compass";

Compass.propTypes = {
  ...svgInternalShape,
};
