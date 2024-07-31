import { FunctionComponent, PropsWithChildren } from "react";
import PrimaryLayout from "@/components/organisms/Primary";
import AladinTemplate from "@/components/templates/Aladin";

const ExplorerLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <PrimaryLayout route="/explorer">
      <AladinTemplate>{children}</AladinTemplate>
    </PrimaryLayout>
  );
};

export default ExplorerLayout;
