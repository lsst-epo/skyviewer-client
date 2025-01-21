import { FunctionComponent } from "react";
import { graphql } from "@/gql";
import { RootParams } from "../../layout";
import AladinTemplate from "@/components/templates/Aladin";
import EmbeddedExplorer from "@/components/organisms/Embedded";
import getSurveyImage from "@/lib/api/survey";
import { queryAPI } from "@/lib/api/urql";
import { siteFromLocale } from "@/lib/i18n/site";
import { notFound } from "next/navigation";
import CopyText from "@/components/organisms/CopyLink";
import { headers } from "next/headers";

type EmbedParams = {
  slug: string;
};

export interface EmbeddedProps {
  params: RootParams & EmbedParams;
}

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

  const target = Array.isArray(searchParams.target)
    ? view.target
    : searchParams.target;

  const fov =
    !searchParams.fov || Array.isArray(searchParams.fov)
      ? survey.fov
      : parseFloat(searchParams.fov);

  return (
    <AladinTemplate
      fovRange={fovRange}
      hipsConfig={{ id: path, options: { imgFormat } }}
      options={{ fov, target: target || undefined }}
      embedded
    >
      <EmbeddedExplorer data={view} />
    </AladinTemplate>
  );
};

export default EmbeddedPage;
