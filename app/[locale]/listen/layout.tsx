import { FunctionComponent, PropsWithChildren } from "react";
import { Metadata } from "next";
import { fallbackLng } from "@/lib/i18n/settings";
import PrimaryLayout from "@/components/organisms/Primary";

export function generateMetadata({
  params: { locale = fallbackLng },
}: RootProps): Metadata {
  return {
    title: "Listen",
  };
}

const ListenerLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <PrimaryLayout route="/listen">{children}</PrimaryLayout>;
};

export default ListenerLayout;
