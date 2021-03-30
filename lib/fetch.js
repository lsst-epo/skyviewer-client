import { request } from "graphql-request";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

console.log("~~~~~~~~ rosas ~~~~~~ about to log api url");
console.log(API_URL);

export async function queryAPI(query, previewToken) {
  const isPreview = previewToken && previewToken !== "";
  const url = isPreview ? `${API_URL}?token=${previewToken}` : API_URL;

  return request(url, query).then((data) => data);
}
