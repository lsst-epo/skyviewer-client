/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query EmbeddedTourLayout($site: [String], $id: [QueryArgument]) {\n    toursEntries(id: $id, site: $site) {\n      ... on tours_tour_Entry {\n        tourPois {\n          ... on tourPois_tourPoi_BlockType {\n            fov\n            astroObject {\n              ... on astroObjects_astroObject_Entry {\n                ra\n                dec\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.EmbeddedTourLayoutDocument,
    "\n  query EmbeddedTourQuery($site: [String], $id: [QueryArgument]) {\n    toursEntries(id: $id, site: $site) {\n      ... on tours_tour_Entry {\n        ... on tours_tour_Entry {\n          id\n          slug\n          title\n          tourPois {\n            ... on tourPois_tourPoi_BlockType {\n              id\n              description\n              fov\n              astroObject {\n                ... on astroObjects_astroObject_Entry {\n                  title\n                  astroObjectId\n                  ra\n                  dec\n                  characteristics\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.EmbeddedTourQueryDocument,
    "\n  query TourLayout($site: [String], $slug: [String]) {\n    toursEntries(slug: $slug, site: $site) {\n      ... on tours_tour_Entry {\n        tourPois {\n          ... on tourPois_tourPoi_BlockType {\n            fov\n            astroObject {\n              ... on astroObjects_astroObject_Entry {\n                ra\n                dec\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.TourLayoutDocument,
    "\n    query EmbeddedPage($site: [String]) {\n      embedEntries(site: $site) {\n        ... on embed_embed_Entry {\n          survey {\n            ... on surveys_surveys_Entry {\n              title\n              fov\n              fovMax\n              fovMin\n              path\n              imgFormat\n            }\n          }\n        }\n      }\n    }\n  ": types.EmbeddedPageDocument,
    "\n    query ExplorerPage($site: [String]) {\n      explorerEntries {\n        ... on explorer_explorer_Entry {\n          survey {\n            ... on surveys_surveys_Entry {\n              title\n              fov\n              fovMax\n              fovMin\n              path\n              imgFormat\n            }\n          }\n        }\n      }\n    }\n  ": types.ExplorerPageDocument,
    "\n  query SurveyImage {\n    surveysEntries {\n      ... on surveys_surveys_Entry {\n        title\n        path\n        target\n        fovMin\n        fovMax\n        fov\n        imgFormat\n      }\n    }\n  }\n": types.SurveyImageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query EmbeddedTourLayout($site: [String], $id: [QueryArgument]) {\n    toursEntries(id: $id, site: $site) {\n      ... on tours_tour_Entry {\n        tourPois {\n          ... on tourPois_tourPoi_BlockType {\n            fov\n            astroObject {\n              ... on astroObjects_astroObject_Entry {\n                ra\n                dec\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query EmbeddedTourLayout($site: [String], $id: [QueryArgument]) {\n    toursEntries(id: $id, site: $site) {\n      ... on tours_tour_Entry {\n        tourPois {\n          ... on tourPois_tourPoi_BlockType {\n            fov\n            astroObject {\n              ... on astroObjects_astroObject_Entry {\n                ra\n                dec\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query EmbeddedTourQuery($site: [String], $id: [QueryArgument]) {\n    toursEntries(id: $id, site: $site) {\n      ... on tours_tour_Entry {\n        ... on tours_tour_Entry {\n          id\n          slug\n          title\n          tourPois {\n            ... on tourPois_tourPoi_BlockType {\n              id\n              description\n              fov\n              astroObject {\n                ... on astroObjects_astroObject_Entry {\n                  title\n                  astroObjectId\n                  ra\n                  dec\n                  characteristics\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query EmbeddedTourQuery($site: [String], $id: [QueryArgument]) {\n    toursEntries(id: $id, site: $site) {\n      ... on tours_tour_Entry {\n        ... on tours_tour_Entry {\n          id\n          slug\n          title\n          tourPois {\n            ... on tourPois_tourPoi_BlockType {\n              id\n              description\n              fov\n              astroObject {\n                ... on astroObjects_astroObject_Entry {\n                  title\n                  astroObjectId\n                  ra\n                  dec\n                  characteristics\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TourLayout($site: [String], $slug: [String]) {\n    toursEntries(slug: $slug, site: $site) {\n      ... on tours_tour_Entry {\n        tourPois {\n          ... on tourPois_tourPoi_BlockType {\n            fov\n            astroObject {\n              ... on astroObjects_astroObject_Entry {\n                ra\n                dec\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query TourLayout($site: [String], $slug: [String]) {\n    toursEntries(slug: $slug, site: $site) {\n      ... on tours_tour_Entry {\n        tourPois {\n          ... on tourPois_tourPoi_BlockType {\n            fov\n            astroObject {\n              ... on astroObjects_astroObject_Entry {\n                ra\n                dec\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query EmbeddedPage($site: [String]) {\n      embedEntries(site: $site) {\n        ... on embed_embed_Entry {\n          survey {\n            ... on surveys_surveys_Entry {\n              title\n              fov\n              fovMax\n              fovMin\n              path\n              imgFormat\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query EmbeddedPage($site: [String]) {\n      embedEntries(site: $site) {\n        ... on embed_embed_Entry {\n          survey {\n            ... on surveys_surveys_Entry {\n              title\n              fov\n              fovMax\n              fovMin\n              path\n              imgFormat\n            }\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ExplorerPage($site: [String]) {\n      explorerEntries {\n        ... on explorer_explorer_Entry {\n          survey {\n            ... on surveys_surveys_Entry {\n              title\n              fov\n              fovMax\n              fovMin\n              path\n              imgFormat\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query ExplorerPage($site: [String]) {\n      explorerEntries {\n        ... on explorer_explorer_Entry {\n          survey {\n            ... on surveys_surveys_Entry {\n              title\n              fov\n              fovMax\n              fovMin\n              path\n              imgFormat\n            }\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SurveyImage {\n    surveysEntries {\n      ... on surveys_surveys_Entry {\n        title\n        path\n        target\n        fovMin\n        fovMax\n        fov\n        imgFormat\n      }\n    }\n  }\n"): (typeof documents)["\n  query SurveyImage {\n    surveysEntries {\n      ... on surveys_surveys_Entry {\n        title\n        path\n        target\n        fovMin\n        fovMax\n        fov\n        imgFormat\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;