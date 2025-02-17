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
    "\n  query TourLayout($site: [String], $slug: [String]) {\n    toursEntries(slug: $slug, site: $site) {\n      ... on tours_tour_Entry {\n        tourPois {\n          ... on tourPois_tourPoi_BlockType {\n            fov\n            astroObject {\n              ... on astroObjects_astroObject_Entry {\n                ra\n                dec\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.TourLayoutDocument,
    "\n    query EmbeddedPage($site: [String]) {\n      embedEntries(site: $site) {\n        ... on embed_embed_Entry {\n          survey {\n            ... on surveys_surveys_Entry {\n              title\n              fov\n              fovMax\n              fovMin\n              path\n              imgFormat\n            }\n          }\n        }\n      }\n    }\n  ": types.EmbeddedPageDocument,
    "\n    query ExplorerPage($site: [String]) {\n      explorerEntries(site: $site) {\n        ... on explorer_explorer_Entry {\n          survey {\n            ... on surveys_surveys_Entry {\n              title\n              fov\n              fovMax\n              fovMin\n              path\n              target\n              imgFormat\n            }\n          }\n        }\n      }\n    }\n  ": types.ExplorerPageDocument,
    "\n    query GuidedExperiencesPage($site: [String]) {\n      guidedExperiencesEntries(site: $site) {\n        ... on guidedExperiences_guidedExperiences_Entry {\n          title\n          guidedExperiences {\n            ... on guidedExperiences_experience_BlockType {\n              experienceCategory {\n                id\n                slug\n                title\n              }\n              previewImage {\n                width\n                height\n                additional {\n                  AltTextEN\n                  AltTextES\n                }\n                url {\n                  directUrlOriginal\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ": types.GuidedExperiencesPageDocument,
    "\n    query TourCount($site: [String], $section: [String]) {\n      entries(site: $site, section: $section) {\n        id\n      }\n    }\n  ": types.TourCountDocument,
    "\n  query SurveyImage {\n    surveysEntries {\n      ... on surveys_surveys_Entry {\n        title\n        path\n        target\n        fovMin\n        fovMax\n        fov\n        imgFormat\n      }\n    }\n  }\n": types.SurveyImageDocument,
    "\n    query AllTours($site: [String]) {\n      toursEntries(site: $site) {\n        ... on tours_tour_Entry {\n          id\n          complexity\n          duration\n          title\n          uri\n          thumbnail {\n            width\n            height\n            additional {\n              AltTextEN\n              AltTextES\n            }\n            url {\n              directUrlOriginal\n            }\n          }\n        }\n      }\n    }\n  ": types.AllToursDocument,
    "\n    query TourMetadata($site: [String], $slug: [String]) {\n      toursEntries(site: $site, slug: $slug) {\n        ... on tours_tour_Entry {\n          title\n          complexity\n          duration\n          slug\n          backgroundImage {\n            width\n            height\n            additional {\n              AltTextEN\n              AltTextES\n            }\n            url {\n              directUrlOriginal\n            }\n          }\n        }\n      }\n    }\n  ": types.TourMetadataDocument,
    "\n    query Tour($site: [String], $slug: [String]) {\n      toursEntries(site: $site, slug: $slug) {\n        ... on tours_tour_Entry {\n          title\n          slug\n          thumbnail {\n            width\n            height\n            additional {\n              AltTextEN\n              AltTextES\n            }\n            url {\n              directUrlOriginal\n            }\n          }\n          introHeading\n          introSubheading\n          introContentBlocks {\n            ... on introContentBlocks_introBlock_BlockType {\n              id\n              text: body\n            }\n          }\n          factsHeading\n          factsContentBlocks {\n            ... on factsContentBlocks_factsContentBlock_BlockType {\n              id\n              text: body\n            }\n          }\n        }\n      }\n    }\n  ": types.TourDocument,
    "\n    query ToursPaths($site: [String]) {\n      toursEntries(site: $site) {\n        ... on tours_tour_Entry {\n          slug\n        }\n      }\n    }\n  ": types.ToursPathsDocument,
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
export function graphql(source: "\n  query TourLayout($site: [String], $slug: [String]) {\n    toursEntries(slug: $slug, site: $site) {\n      ... on tours_tour_Entry {\n        tourPois {\n          ... on tourPois_tourPoi_BlockType {\n            fov\n            astroObject {\n              ... on astroObjects_astroObject_Entry {\n                ra\n                dec\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query TourLayout($site: [String], $slug: [String]) {\n    toursEntries(slug: $slug, site: $site) {\n      ... on tours_tour_Entry {\n        tourPois {\n          ... on tourPois_tourPoi_BlockType {\n            fov\n            astroObject {\n              ... on astroObjects_astroObject_Entry {\n                ra\n                dec\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query EmbeddedPage($site: [String]) {\n      embedEntries(site: $site) {\n        ... on embed_embed_Entry {\n          survey {\n            ... on surveys_surveys_Entry {\n              title\n              fov\n              fovMax\n              fovMin\n              path\n              imgFormat\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query EmbeddedPage($site: [String]) {\n      embedEntries(site: $site) {\n        ... on embed_embed_Entry {\n          survey {\n            ... on surveys_surveys_Entry {\n              title\n              fov\n              fovMax\n              fovMin\n              path\n              imgFormat\n            }\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ExplorerPage($site: [String]) {\n      explorerEntries(site: $site) {\n        ... on explorer_explorer_Entry {\n          survey {\n            ... on surveys_surveys_Entry {\n              title\n              fov\n              fovMax\n              fovMin\n              path\n              target\n              imgFormat\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query ExplorerPage($site: [String]) {\n      explorerEntries(site: $site) {\n        ... on explorer_explorer_Entry {\n          survey {\n            ... on surveys_surveys_Entry {\n              title\n              fov\n              fovMax\n              fovMin\n              path\n              target\n              imgFormat\n            }\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GuidedExperiencesPage($site: [String]) {\n      guidedExperiencesEntries(site: $site) {\n        ... on guidedExperiences_guidedExperiences_Entry {\n          title\n          guidedExperiences {\n            ... on guidedExperiences_experience_BlockType {\n              experienceCategory {\n                id\n                slug\n                title\n              }\n              previewImage {\n                width\n                height\n                additional {\n                  AltTextEN\n                  AltTextES\n                }\n                url {\n                  directUrlOriginal\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GuidedExperiencesPage($site: [String]) {\n      guidedExperiencesEntries(site: $site) {\n        ... on guidedExperiences_guidedExperiences_Entry {\n          title\n          guidedExperiences {\n            ... on guidedExperiences_experience_BlockType {\n              experienceCategory {\n                id\n                slug\n                title\n              }\n              previewImage {\n                width\n                height\n                additional {\n                  AltTextEN\n                  AltTextES\n                }\n                url {\n                  directUrlOriginal\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query TourCount($site: [String], $section: [String]) {\n      entries(site: $site, section: $section) {\n        id\n      }\n    }\n  "): (typeof documents)["\n    query TourCount($site: [String], $section: [String]) {\n      entries(site: $site, section: $section) {\n        id\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SurveyImage {\n    surveysEntries {\n      ... on surveys_surveys_Entry {\n        title\n        path\n        target\n        fovMin\n        fovMax\n        fov\n        imgFormat\n      }\n    }\n  }\n"): (typeof documents)["\n  query SurveyImage {\n    surveysEntries {\n      ... on surveys_surveys_Entry {\n        title\n        path\n        target\n        fovMin\n        fovMax\n        fov\n        imgFormat\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query AllTours($site: [String]) {\n      toursEntries(site: $site) {\n        ... on tours_tour_Entry {\n          id\n          complexity\n          duration\n          title\n          uri\n          thumbnail {\n            width\n            height\n            additional {\n              AltTextEN\n              AltTextES\n            }\n            url {\n              directUrlOriginal\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query AllTours($site: [String]) {\n      toursEntries(site: $site) {\n        ... on tours_tour_Entry {\n          id\n          complexity\n          duration\n          title\n          uri\n          thumbnail {\n            width\n            height\n            additional {\n              AltTextEN\n              AltTextES\n            }\n            url {\n              directUrlOriginal\n            }\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query TourMetadata($site: [String], $slug: [String]) {\n      toursEntries(site: $site, slug: $slug) {\n        ... on tours_tour_Entry {\n          title\n          complexity\n          duration\n          slug\n          backgroundImage {\n            width\n            height\n            additional {\n              AltTextEN\n              AltTextES\n            }\n            url {\n              directUrlOriginal\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query TourMetadata($site: [String], $slug: [String]) {\n      toursEntries(site: $site, slug: $slug) {\n        ... on tours_tour_Entry {\n          title\n          complexity\n          duration\n          slug\n          backgroundImage {\n            width\n            height\n            additional {\n              AltTextEN\n              AltTextES\n            }\n            url {\n              directUrlOriginal\n            }\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Tour($site: [String], $slug: [String]) {\n      toursEntries(site: $site, slug: $slug) {\n        ... on tours_tour_Entry {\n          title\n          slug\n          thumbnail {\n            width\n            height\n            additional {\n              AltTextEN\n              AltTextES\n            }\n            url {\n              directUrlOriginal\n            }\n          }\n          introHeading\n          introSubheading\n          introContentBlocks {\n            ... on introContentBlocks_introBlock_BlockType {\n              id\n              text: body\n            }\n          }\n          factsHeading\n          factsContentBlocks {\n            ... on factsContentBlocks_factsContentBlock_BlockType {\n              id\n              text: body\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query Tour($site: [String], $slug: [String]) {\n      toursEntries(site: $site, slug: $slug) {\n        ... on tours_tour_Entry {\n          title\n          slug\n          thumbnail {\n            width\n            height\n            additional {\n              AltTextEN\n              AltTextES\n            }\n            url {\n              directUrlOriginal\n            }\n          }\n          introHeading\n          introSubheading\n          introContentBlocks {\n            ... on introContentBlocks_introBlock_BlockType {\n              id\n              text: body\n            }\n          }\n          factsHeading\n          factsContentBlocks {\n            ... on factsContentBlocks_factsContentBlock_BlockType {\n              id\n              text: body\n            }\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query ToursPaths($site: [String]) {\n      toursEntries(site: $site) {\n        ... on tours_tour_Entry {\n          slug\n        }\n      }\n    }\n  "): (typeof documents)["\n    query ToursPaths($site: [String]) {\n      toursEntries(site: $site) {\n        ... on tours_tour_Entry {\n          slug\n        }\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;