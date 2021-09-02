import { request } from "graphql-request";

export async function queryAPI(query, previewToken) {
  const isPreview = previewToken && previewToken !== "";
  const url = isPreview
    ? `${process.env.NEXT_PUBLIC_API_URL}?token=${previewToken}`
    : process.env.NEXT_PUBLIC_API_URL;

  return request(url, query).then((data) => data);
}

export async function queryAstroAPI(query) {
  const url = process.env.NEXT_PUBLIC_ASTRO_API_URL;
  return request(url, query).then((data) => data);
}
