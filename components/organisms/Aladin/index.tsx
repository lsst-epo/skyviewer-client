import { FunctionComponent, PropsWithChildren } from "react";

const AladinLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <main className="viewer-container">{children}</main>;
};

export default AladinLayout;
