import PropTypes from "prop-types";
import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Email({
  className,
  size = 52,
  fill = "currentColor",
}) {
  const uniqueProps = {
    viewBox: "0 0 52 52",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Email icon</title>
      <path
        className="envelope-outline"
        d="M323.328,446.452h-27.04v-17.86h27.04Zm0-20.152h-27.04A2.288,2.288,0,0,0,294,428.588v17.864a2.288,2.288,0,0,0,2.288,2.288h27.04a2.288,2.288,0,0,0,2.288-2.288v-17.86a2.288,2.288,0,0,0-2.288-2.288"
        transform="translate(-283.808 -411.522)"
      />
      <line
        x1="11.863"
        y2="8.93"
        transform="translate(12.48 26)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.697"
      />
      <line
        x1="11.863"
        y1="8.93"
        transform="translate(27.657 26)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.697"
      />
      <path
        className="envelope-top"
        d="M360,492.4l13.52,10.178L387.04,492.4"
        transform="translate(-347.52 -475.33)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.697"
      />
    </svg>
  );
}

Email.displayName = "SVG.Email";

Email.propTypes = {
  ...svgInternalShape,
};

Email.defaultProps = defaultProps;
