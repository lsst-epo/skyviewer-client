import { FC } from "react";
import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getSkySynthPage } from "@/services/api/skysynth";
import AladinTemplate from "@/components/templates/Aladin";
import SonificationControls from "@/components/molecules/SonificationControls";
import AladinMenu from "@/components/organisms/AladinMenu";

const Listener = dynamic(() => import("@/components/organisms/Listener"), {
  ssr: false,
});

const SkySynthPage: FC<RootProps> = async ({ params: { locale } }) => {
  setRequestLocale(locale);
  const data = await getSkySynthPage(locale);

  if (!data) {
    notFound();
  }

  const { surveys, fovRange, ...configuredOptions } = data;
  console.log("[Skysynth page] surveys: ", surveys);

  return (
    <AladinTemplate
      menu={<AladinMenu locale={locale} />}
      fovRange={fovRange}
      layers={surveys}
      options={configuredOptions}
      initializeWithParams
    >
      <SonificationControls surveys={surveys}/>
      <Listener />
    </AladinTemplate>
  );
};

export default SkySynthPage;
