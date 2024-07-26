import { FunctionComponent, PropsWithChildren } from "react";
import PrimaryLayout from "@/components/organisms/Primary";
import AladinLayout from "@/components/organisms/Aladin";

const ExplorerLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <PrimaryLayout route="/explorer">
      <AladinLayout>{children}</AladinLayout>
    </PrimaryLayout>
  );
};

export default ExplorerLayout;
