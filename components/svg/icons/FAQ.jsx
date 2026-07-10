import defaultProps from "./defaultProps";
import { svgInternalShape } from "@/components/shapes/svg";

export default function Faq({
  className,
  size = 20,
  fill = "currentColor",
}) {
  const uniqueProps = {
    viewBox: "0 0 56.5 53.1",
    width: 20,
    height: 30.79,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>FAQ icon</title>
        <defs>
          <style>
            {`
              .st0 {
                fill: #009fa1;
              }
            `}
          </style>
        </defs>
        <path className="st0" d="M23.1,10.1c-1.7,0-3.1.8-4.1,1.9l1.7,1.6c.6-.6,1.2-1,1.9-1s1.4.5,1.4,1.3c0,1.6-3.1,2.8-2.7,5.7h2.7c-.2-2.5,2.9-3.3,2.9-5.9s-1.7-3.6-4-3.6Z"/>
        <path className="st0" d="M22.8,20.9c-1.1,0-1.9.9-1.9,2s.8,2,1.9,2,1.9-.9,1.9-2-.8-2-1.9-2Z"/>
        <path className="st0" d="M56.5,30.6c0-7.4-5.2-13.5-12.2-14.9v-4.2c0-6.3-5.1-11.4-11.4-11.4H11.4C5.1,0,0,5.1,0,11.4v12.1c0,6.3,5.1,11.4,11.4,11.4h4.9l-3.4,10.9,13.2-10.9h.5c1.9,6.3,7.7,10.8,14.6,10.8s3.5-.3,5.1-.9l10,8.2-3.8-12.3c2.5-2.7,4-6.3,4-10.2ZM26,30.6c0,.5,0,1.1,0,1.6-.6,0-1.2.2-1.7.6l-5.9,4.8.5-1.8c.3-.9.1-1.8-.4-2.5-.5-.7-1.4-1.2-2.3-1.2h-4.9c-4.7,0-8.6-3.8-8.6-8.6v-12.1C2.9,6.7,6.7,2.9,11.4,2.9h21.5c4.7,0,8.6,3.8,8.6,8.6v3.9c0,0-.1,0-.2,0-8.4,0-15.2,6.8-15.2,15.2ZM48.2,42.7c-.5-.4-1.2-.7-1.8-.7s-.6,0-1,.2c-1.4.5-2.8.7-4.1.7-6.8,0-12.4-5.5-12.4-12.4s5.5-12.4,12.4-12.4,12.4,5.5,12.4,12.4-1.1,6-3.2,8.3c-.7.7-.9,1.8-.6,2.8l1,3.2-2.6-2.1Z"/>
        <path className="st0" d="M34.2,29.2c-1.1,0-1.9.9-1.9,2s.8,2,1.9,2,1.9-.9,1.9-2-.8-2-1.9-2Z"/>
        <path className="st0" d="M48.3,29.2c-1.1,0-1.9.9-1.9,2s.8,2,1.9,2,1.9-.9,1.9-2-.8-2-1.9-2Z"/>
        <path className="st0" d="M41.3,29.2c-1.1,0-1.9.9-1.9,2s.8,2,1.9,2,1.9-.9,1.9-2-.8-2-1.9-2Z"/>
    </svg>
  );
}

Faq.displayName = "SVG.FAQ";

Faq.propTypes = {
  ...svgInternalShape,
};
