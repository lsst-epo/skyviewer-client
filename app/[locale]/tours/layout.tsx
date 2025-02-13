import { serverTranslation } from "@/lib/i18n/server";
import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export async function generateMetadata({
  params: { locale },
}: RootProps): Promise<Metadata> {
  const { t } = await serverTranslation(locale);

  return {
    title: t("tours.title"),
  };
}

const ToursLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default ToursLayout;
