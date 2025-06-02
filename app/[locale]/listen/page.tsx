import { FC } from "react";
import AladinTemplate from "@/components/templates/Aladin";
import SonificationControls from "@/components/molecules/SonificationControls";
import { notFound } from "next/navigation";
import { initialPosition } from "@/lib/helpers";
import { getExplorerPage } from "@/services/api/explorer";
import dynamic from "next/dynamic";
import AladinMenu from "@/components/organisms/AladinMenu";
import { setRequestLocale } from "next-intl/server";

const Listener = dynamic(() => import("@/components/organisms/Listener"), {
  ssr: false,
});

const ListenerPage: FC<WithSearchParams<RootProps>> = async ({
  params: { locale },
  searchParams = {},
}) => {
  setRequestLocale(locale);
  const data = await getExplorerPage(locale);

  if (!data) {
    notFound();
  }

  const { surveys, fovRange, ...configuredOptions } = data;

  const options = {
    ...initialPosition(searchParams, { fovRange, ...configuredOptions }),
    backgroundColor: "rgb(0,0,0)",
  };

  return (
    <AladinTemplate
      menu={<AladinMenu locale={locale} />}
      fovRange={fovRange}
      layers={surveys}
      {...{ options }}
    >
      <SonificationControls />
      <Listener />
    </AladinTemplate>
  );
};

export default ListenerPage;
