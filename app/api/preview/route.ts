import { NextRequest, NextResponse } from "next/server";
import { redirect, RedirectType } from "next/navigation";
import { env } from "@/env";
import { graphql } from "@/gql/gql";
import { fallbackLng } from "@/lib/i18n/settings";
import { siteFromLocale, localeFromSite } from "@/lib/i18n/site";
import queryAPI from "@/services/api/client";
import previewSession from "@/services/sessions/preview";
import { getPathname } from "@/lib/i18n/navigation";

const PREVIEW_SECRET_TOKEN = env.CRAFT_SECRET_TOKEN;
const CRAFT_HOMEPAGE_URI = "__home__";

const Query = graphql(`
  query PagePreviewQuery($site: [String], $uri: [String]) {
    entry(site: $site, uri: $uri) {
      __typename
      uri
      title
    }
  }
`);

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;
  const secret = searchParams.get("secret");
  const previewToken = searchParams.get("token") || undefined;
  const site = siteFromLocale(
    (searchParams.get("site") || fallbackLng).toLowerCase()
  );
  const locale = localeFromSite(site);
  const uri = searchParams.get("uri");

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== PREVIEW_SECRET_TOKEN) {
    return new NextResponse("Invalid token", { status: 401 });
  }

  if (!uri) {
    return new NextResponse("URI missing", { status: 422 });
  }

  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
      uri: [uri],
    },
    previewToken,
    fetchOptions: { cache: "no-store" },
  });

  // If the uri doesn't exist prevent draft mode from being enabled
  if (!data?.entry?.uri) {
    return new NextResponse("Invalid uri", { status: 422 });
  }

  previewSession().start({ previewToken });

  const segments: Array<String> = [""];

  if (data.entry.uri !== CRAFT_HOMEPAGE_URI) {
    segments.push(data.entry.uri);
  }

  const params = new URLSearchParams();

  if (previewToken) {
    params.set("preview", previewToken);
  }

  // Redirect to the path from the fetched entry
  // We don't redirect to searchParams.uri as that might lead to open redirect vulnerabilities

  const redirectPath = getPathname({
    href: { pathname: segments.join("/") },
    locale,
    forcePrefix: true,
  });

  redirect(redirectPath, RedirectType.replace);
}
