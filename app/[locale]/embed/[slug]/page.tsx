import { FunctionComponent } from "react";
import { notFound } from "next/navigation";
import { graphql } from "@/gql";
import AladinTemplate from "@/components/templates/Aladin";
import EmbeddedExplorer from "@/components/organisms/Embedded";
import getSurveyImage from "@/lib/api/survey";
import { queryAPI } from "@/lib/api/urql";
import { siteFromLocale } from "@/lib/i18n/site";
import { initialPosition } from "@/lib/helpers";

const Query = graphql(`
  query EmbeddedPageQuery($site: [String], $slug: [String]) {
    embeddedViewsEntries(slug: $slug, site: $site) {
      ... on embeddedViews_default_Entry {
        title
        fov
        fovMax
        fovMin
        target
        ...EmbeddedExplorer
      }
    }
  }
`);

const EmbeddedPage: FunctionComponent<
  WithSearchParams<EmbeddedProps>
> = async ({ params: { locale, slug }, searchParams = {} }) => {
  const site = siteFromLocale(locale);
  const survey = await getSurveyImage();
  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
      slug: [slug],
    },
  });

  if (!data || !data.embeddedViewsEntries || !survey) {
    notFound();
  }

  const { embeddedViewsEntries } = data;
  const view = embeddedViewsEntries[0];

  if (!view) {
    notFound();
  }

  const { imgFormat, path, fovRange } = survey;

  const options = { ...initialPosition(searchParams, survey) };

  return (
    <AladinTemplate
      fovRange={fovRange}
      hipsConfig={{ id: path, options: { imgFormat } }}
      options={options}
      embedded
    >
      <EmbeddedExplorer data={view} />
    </AladinTemplate>
  );
};

export default EmbeddedPage;
