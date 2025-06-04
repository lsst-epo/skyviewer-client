import { FunctionComponent } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import AladinTemplate from "@/components/templates/Aladin";
import EmbeddedExplorer from "@/components/organisms/Embedded";
import CurrentPositionPopover from "@/components/organisms/CurrentPositionPopover";
import { initialPosition } from "@/lib/helpers";
import { getEmbedPage } from "@/services/api/embed";

const EmbeddedPage: FunctionComponent<WithSearchParams<RootProps>> = async ({
  params: { locale },
  searchParams = {},
}) => {
  setRequestLocale(locale);
  const data = await getEmbedPage(locale);

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
      fovRange={fovRange}
      layers={surveys}
      {...{ options }}
      embedded
    >
      <EmbeddedExplorer />
      <CurrentPositionPopover />
    </AladinTemplate>
  );
};

export const dynamic = "force-dynamic";

export default EmbeddedPage;
