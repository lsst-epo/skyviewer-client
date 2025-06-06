import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { fallbackLng } from "@/lib/i18n/settings";
import { getExplorerPage } from "@/services/api/explorer";

export const generateMetadata = async ({
  params: { locale = fallbackLng },
}: RootProps): Promise<Metadata> => {
  const data = await getExplorerPage(locale);

  return {
    title: data?.title,
  };
};

const ExplorerLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default ExplorerLayout;
