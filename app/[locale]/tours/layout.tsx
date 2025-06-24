import { Metadata, Viewport } from "next";
import { FC, PropsWithChildren } from "react";
import { serverTranslation } from "@/lib/i18n/server";

export async function generateMetadata({
  params: { locale },
}: RootProps): Promise<Metadata> {
  const { t } = await serverTranslation(locale);

  return {
    title: t("tours.title"),
  };
}

export const generateViewport = (): Viewport => {
  return { themeColor: "#1f2121" };
};

const ToursLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default ToursLayout;
