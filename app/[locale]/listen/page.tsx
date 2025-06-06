import { FC } from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import AladinTemplate from "@/components/templates/Aladin";
import SonificationControls from "@/components/molecules/SonificationControls";
import { getExplorerPage } from "@/services/api/explorer";
import AladinMenu from "@/components/organisms/AladinMenu";

const Listener = dynamic(() => import("@/components/organisms/Listener"), {
  ssr: false,
});

const ListenerPage: FC<RootProps> = async ({ params: { locale } }) => {
  setRequestLocale(locale);
  const data = await getExplorerPage(locale);

  if (!data) {
    notFound();
  }

  const { surveys, fovRange, ...configuredOptions } = data;

  return (
    <AladinTemplate
      menu={<AladinMenu locale={locale} />}
      fovRange={fovRange}
      layers={surveys}
      options={configuredOptions}
      initializeWithParams
    >
      <SonificationControls />
      <Listener />
    </AladinTemplate>
  );
};

export default ListenerPage;
