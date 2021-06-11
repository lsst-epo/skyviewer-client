import { gql } from "graphql-request";

/*
 * Image transforms (https://craftcms.com/docs/3.x/graphql.html#pre-defined-interfaces)
 */
export function transform(mode, width, height) {
  const heightStr = height ? `height: ${height}` : "";
  return `@transform (mode: "${mode}", width: ${width}, ${heightStr})`;
}

export function getImageFields(mode = "fit", width = 900, height) {
  return gql`
    altText
    width
    height
    url3x: url ${transform(mode, width * 3, height * 3)}
    url2x: url ${transform(mode, width * 2, height * 2)}
    url ${transform(mode, width, height)}
  `;
}
