import { ComponentProps, FC } from "react";
import defaultProps from "./defaultProps";

const MapSearch: FC<ComponentProps<"svg">> = ({
  className,
  fill = "currentColor",
}) => {
  const uniqueProps = {
    viewBox: "0 0 18.7 18.7",
    fill,
    className,
  };

  return (
    <svg {...{ ...defaultProps, ...uniqueProps }}>
      <path d="M12.8 6.9ZM1.3 17.4a.9.9 0 0 1-.9-.1 1 1 0 0 1-.4-.8V2.7a1 1 0 0 1 .2-.6 1.1 1.1 0 0 1 .5-.3L5.9 0l5.9 2L16.4.4a.9.9 0 0 1 .9.1 1 1 0 0 1 .4.8v8.3a5.5 5.5 0 0 0-.9-1 6.2 6.2 0 0 0-1-.8v-5l-3 1V7a5.8 5.8 0 0 0-1 0 5.5 5.5 0 0 0-1 .3V3.8l-4-1.4v12.9ZM2 15 5 14V2.4l-3 1Zm10.8-.3a2 2 0 0 0 1.4-.5 2 2 0 0 0 .5-1.4 1.8 1.8 0 0 0-.5-1.4 2 2 0 0 0-1.4-.6 1.9 1.9 0 0 0-1.4.6 1.9 1.9 0 0 0-.6 1.4 1.9 1.9 0 0 0 .6 1.4 1.9 1.9 0 0 0 1.4.5Zm0 2a3.8 3.8 0 0 1-2.8-1.2 3.8 3.8 0 0 1-1.2-2.7A3.8 3.8 0 0 1 10 10a3.8 3.8 0 0 1 2.8-1.2 3.8 3.8 0 0 1 2.7 1.2 3.8 3.8 0 0 1 1.2 2.8 4.1 4.1 0 0 1-.1 1 3.6 3.6 0 0 1-.4 1l2.5 2.5-1.4 1.4-2.5-2.5a3.6 3.6 0 0 1-1 .4 4.1 4.1 0 0 1-1 .1ZM4.9 2.4Z" />
    </svg>
  );
};

MapSearch.displayName = "SVG.MapSearch";

export default MapSearch;
