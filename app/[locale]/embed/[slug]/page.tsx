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
  searchParams?: Record<string, string | Array<string> | undefined>;
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

const EmbeddedPage: FunctionComponent<EmbeddedProps> = async ({
  params: { locale, slug },
}) => {
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

  const { target, title } = view;

  const { imgFormat, path, fov, fovRange } = survey;

  const link = `${headers().get("host")}/${locale}/embed/${slug}`;
  const textToCopy = `<iframe src="${link}" title=${title}></iframe>`;

  return (
    <AladinTemplate
      fovRange={fovRange}
      hipsConfig={{ id: path, options: { imgFormat } }}
      options={{ fov, target: target || undefined }}
      embedded
      // footer={<CopyText {...{ textToCopy }} />}
    >
      <EmbeddedExplorer data={view} />
    </AladinTemplate>
  );
};

export default EmbeddedPage;
