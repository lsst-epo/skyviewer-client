import { FunctionComponent, PropsWithChildren } from "react";
import { MenuProvider } from "@/contexts/Menu";
import AladinMenu from "@/components/organisms/AladinMenu";

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
      <AladinMenu
        backgroundColor={backgroundColor}
        closeUrl={closeUrl}
        route={route}
      />
      {children}
    </MenuProvider>
  );
};

export default PrimaryLayout;
