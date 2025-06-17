import { Header, RouteHas } from "next/dist/lib/load-custom-routes";
import { env } from "../env";

const cacheControl = "public,max-age=0,s-maxage=3600,stale-while-revalidate";

const excludeNonRSC = (): Array<RouteHas> => {
  const excluded = [
    "audio",
    "audioworklet",
    "embed",
    "fencedframe",
    "font",
    "frame",
    "iframe",
    "image",
    "manifest",
    "object",
    "paintworklet",
    "report",
    "script",
    "serviceworker",
    "sharedworker",
    "style",
    "track",
    "video",
    "webidentity",
    "worker",
    "xslt",
  ];

  return excluded.map((value) => {
    return { type: "header", key: "sec-fetch-dest", value };
  });
};

const attachRSCHeaders = (headers: Array<Header>) => {
  const rscHeaders: Header = {
    source: "/:all*",
    missing: [
      {
        type: "cookie",
        key: "__prerender_bypass",
      },
      ...excludeNonRSC(),
    ],
    headers: [
      {
        key: "x-rsc-cache-enabled",
        value: `${env.NEXT_RSC_CACHE_CONTROL}`,
      },
    ],
  };

  if (env.NEXT_RSC_CACHE_CONTROL) {
    headers.push({
      source: "/api/preview",
      has: [
        {
          type: "cookie",
          key: "__prerender_bypass",
        },
      ],
      headers: [
        {
          key: "clear-site-data",
          value: `"cache"`,
        },
      ],
    });

    rscHeaders.headers.push({
      key: "cache-control",
      value: cacheControl,
    });
  }

  headers.push(rscHeaders);
};

const headers = async (): Promise<Array<Header>> => {
  const headers: Array<Header> = [];

  attachRSCHeaders(headers);

  return headers;
};

export default headers;
