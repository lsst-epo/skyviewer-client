import { svgInternalShape } from "@/components/shapes/svg";
import defaultProps from "./defaultProps";

export default function Share({ className, fill = "currentColor" }) {
  const uniqueProps = {
    viewBox: "0 0 22 19.7",
    width: 22,
    height: 19.7,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Share icon</title>
      <path
        d="M19.08,13.859a2.908,2.908,0,0,0-2.139.937L5.831,10.032c0-.061.009-.121.009-.182s-.005-.122-.009-.182L16.941,4.9A2.917,2.917,0,1,0,16.16,2.92c0,.062.005.122.009.182L5.059,7.866a2.92,2.92,0,1,0,0,3.968L16.169,16.6c0,.06-.009.12-.009.181a2.92,2.92,0,1,0,2.92-2.92Z"
        fill="#fff"
      />
    </svg>
  );
}

Share.displayName = "SVG.Share";

Share.propTypes = {
  ...svgInternalShape,
};
