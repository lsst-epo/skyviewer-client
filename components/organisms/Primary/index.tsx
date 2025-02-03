import { FunctionComponent, PropsWithChildren } from "react";
import { MenuProvider } from "@/contexts/Menu";
import Header from "@/components/global/PrimaryHeader";

interface PrimaryLayoutProps {
  closeUrl?: string;
  route?: string;
  backgroundColor?: "primary" | "secondary";
}

const PrimaryLayout: FunctionComponent<
  PropsWithChildren<PrimaryLayoutProps>
> = ({ closeUrl, route, backgroundColor = "primary", children }) => {
  return (
    <MenuProvider>
      <Header
        backgroundColor={backgroundColor}
        closeUrl={closeUrl}
        route={route}
      />
      {children}
    </MenuProvider>
  );
};

export default PrimaryLayout;
