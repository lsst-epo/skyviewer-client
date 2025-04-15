import { FunctionComponent } from "react";
import { notFound } from "next/navigation";
import AladinTemplate from "@/components/templates/Aladin";
import EmbeddedExplorer from "@/components/organisms/Embedded";
import CurrentPositionPopover from "@/components/organisms/CurrentPositionPopover";
import { initialPosition } from "@/lib/helpers";
import { getEmbedPage } from "@/services/api/embed";

const EmbeddedPage: FunctionComponent<WithSearchParams<RootProps>> = async ({
  params: { locale },
  searchParams = {},
}) => {
  const survey = await getEmbedPage(locale);

  if (!survey) {
    notFound();
  }

  const { imgFormat, path, fovRange } = survey;

  return (
    <AladinTemplate
      fovRange={fovRange}
      hipsConfig={{ id: path, options: { imgFormat } }}
      options={initialPosition(searchParams, survey)}
      embedded
    >
      <EmbeddedExplorer />
      <CurrentPositionPopover />
    </AladinTemplate>
  );
};

export default EmbeddedPage;
