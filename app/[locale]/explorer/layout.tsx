import { FunctionComponent, PropsWithChildren } from "react";
import PrimaryLayout from "@/components/organisms/Primary";

const ExplorerLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <PrimaryLayout route="/explorer">{children}</PrimaryLayout>;
};

export default ExplorerLayout;
