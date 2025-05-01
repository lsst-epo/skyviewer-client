import { FunctionComponent, PropsWithChildren } from "react";
import { Metadata } from "next";
import { fallbackLng } from "@/lib/i18n/settings";
import AladinMenu from "@/components/organisms/AladinMenu";

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
  return (
    <>
      <AladinMenu locale={locale} />
      {children}
    </>
  );
};

export default ListenerLayout;
