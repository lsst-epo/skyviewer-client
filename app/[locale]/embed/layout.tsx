import { fallbackLng } from "@/lib/i18n/settings";
import { getEmbedPage } from "@/services/api/embed";
import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const generateMetadata = async ({
  params: { locale = fallbackLng },
}: RootProps): Promise<Metadata> => {
  const data = await getEmbedPage(locale);

  return {
    title: data?.title,
  };
};

const EmbedLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default EmbedLayout;
