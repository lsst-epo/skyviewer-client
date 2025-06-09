import { FunctionComponent, PropsWithChildren } from "react";
import { Metadata } from "next";
import { fallbackLng } from "@/lib/i18n/settings";

export function generateMetadata({
  params: { locale = fallbackLng },
}: RootProps): Metadata {
  return {
    title: "Listen",
  };
}

const ListenerLayout: FunctionComponent<PropsWithChildren<RootProps>> = ({
  params: { locale },
  children,
}) => {
  return <>{children}</>;
};

export default ListenerLayout;
