/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar type represents a point in time. */
  DateTime: { input: any; output: any; }
  /** The `Number` scalar type represents a number that can be a float, an integer or a null value. */
  Number: { input: any; output: any; }
  /** The `QueryArgument` scalar type represents a value to be using in Craft element queries. It can be an integer, a string, or a boolean value. */
  QueryArgument: { input: any; output: any; }
};

export type Address = AddressInterface & ElementInterface & {
  __typename?: 'Address';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** First line of the address */
  addressLine1: Maybe<Scalars['String']['output']>;
  /** Second line of the address */
  addressLine2: Maybe<Scalars['String']['output']>;
  /** Administrative area. */
  administrativeArea: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** Two-letter country code */
  countryCode: Scalars['String']['output'];
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Dependent locality */
  dependentLocality: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The first name on the address. */
  firstName: Maybe<Scalars['String']['output']>;
  /** The full name on the address. */
  fullName: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The last name on the address. */
  lastName: Maybe<Scalars['String']['output']>;
  /** Latitude */
  latitude: Maybe<Scalars['String']['output']>;
  /** Locality */
  locality: Maybe<Scalars['String']['output']>;
  /** Longitude */
  longitude: Maybe<Scalars['String']['output']>;
  /** Organization name */
  organization: Maybe<Scalars['String']['output']>;
  /** Organization tax ID */
  organizationTaxId: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** Sorting code */
  sortingCode: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
};


export type Address_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all addresses. */
export type AddressInterface = {
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** First line of the address */
  addressLine1: Maybe<Scalars['String']['output']>;
  /** Second line of the address */
  addressLine2: Maybe<Scalars['String']['output']>;
  /** Administrative area. */
  administrativeArea: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** Two-letter country code */
  countryCode: Scalars['String']['output'];
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Dependent locality */
  dependentLocality: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The first name on the address. */
  firstName: Maybe<Scalars['String']['output']>;
  /** The full name on the address. */
  fullName: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The last name on the address. */
  lastName: Maybe<Scalars['String']['output']>;
  /** Latitude */
  latitude: Maybe<Scalars['String']['output']>;
  /** Locality */
  locality: Maybe<Scalars['String']['output']>;
  /** Longitude */
  longitude: Maybe<Scalars['String']['output']>;
  /** Organization name */
  organization: Maybe<Scalars['String']['output']>;
  /** Organization tax ID */
  organizationTaxId: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** Sorting code */
  sortingCode: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all addresses. */
export type AddressInterface_CountArgs = {
  field: Scalars['String']['input'];
};

export type AssetCriteriaInput = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the assets’ files’ last-modified dates. */
  dateModified: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the assets’ filenames. */
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on whether the assets have alternative text. */
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the assets’ image heights. */
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  /** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the assets’ file kinds. */
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']['input']>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the assets’ file sizes (in bytes). */
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the assets’ image widths. */
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of transform handles to preload. */
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** This is the interface implemented by all assets. */
export type AssetInterface = {
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Alternative text for the asset. */
  alt: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the asset file was last modified. */
  dateModified: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The file extension for the asset file. */
  extension: Scalars['String']['output'];
  /** The filename of the asset file. */
  filename: Scalars['String']['output'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int']['output'];
  /** Returns the file’s format. */
  format: Maybe<Scalars['String']['output']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean']['output'];
  /** The height in pixels or null if it’s not an image. */
  height: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** An `<img>` tag based on this asset. */
  img: Maybe<Scalars['String']['output']>;
  /** The file kind. */
  kind: Scalars['String']['output'];
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType: Maybe<Scalars['String']['output']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String']['output'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The file size in bytes. */
  size: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url: Maybe<Scalars['String']['output']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId: Maybe<Scalars['Int']['output']>;
  /** The width in pixels or null if it’s not an image. */
  width: Maybe<Scalars['Int']['output']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceFormatArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceHeightArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceNextArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfacePrevArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceUrlArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


/** This is the interface implemented by all assets. */
export type AssetInterfaceWidthArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryCriteriaInput = {
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  /** Whether to only return categories that the user has permission to edit. */
  editable: InputMaybe<Scalars['Boolean']['input']>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level: InputMaybe<Scalars['Int']['input']>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all categories. */
export type CategoryInterface = {
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** The category’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<CategoryInterface>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The category’s children. */
  children: Array<CategoryInterface>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** The category’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<CategoryInterface>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the group that contains the category. */
  groupHandle: Scalars['String']['output'];
  /** The ID of the group that contains the category. */
  groupId: Scalars['Int']['output'];
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<CategoryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<CategoryInterface>;
  /** The category’s parent. */
  parent: Maybe<CategoryInterface>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<CategoryInterface>;
  /** The element’s right position within its structure. */
  rgt: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceAncestorsArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceChildrenArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceDescendantsArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceLocalizedArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceNextArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfaceParentArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all categories. */
export type CategoryInterfacePrevArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

export type Element = ElementInterface & {
  __typename?: 'Element';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
};


export type Element_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all elements. */
export type ElementInterface = {
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all elements. */
export type ElementInterface_CountArgs = {
  field: Scalars['String']['input'];
};

export type EntryCriteriaInput = {
  /** Narrows the query results to only entries that were posted on or after a certain date. */
  after: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to. */
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the entries’ authors. */
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only entries that were posted before a certain date. */
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Whether to only return entries that the user has permission to edit. */
  editable: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the entries’ expiry dates. */
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on whether the elements have any descendants in their structure. */
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ level within the structure. */
  level: InputMaybe<Scalars['Int']['input']>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  /** Narrows the query results based on the entries’ post dates. */
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Narrows the query results based on the section handles the entries belong to. */
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which structure data should be joined into the query. */
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the entries’ entry type handles. */
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Explicitly determines whether the query should join in the structure data. */
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all entries. */
export type EntryInterface = {
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceDescendantsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceLocalizedArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceNextArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfaceParentArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the interface implemented by all entries. */
export type EntryInterfacePrevArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

/** This is the interface implemented by all global sets. */
export type GlobalSetInterface = {
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the global set. */
  handle: Scalars['String']['output'];
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The name of the global set. */
  name: Scalars['String']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all global sets. */
export type GlobalSetInterface_CountArgs = {
  field: Scalars['String']['input'];
};

/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface = {
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int']['output'];
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all matrix blocks. */
export type MatrixBlockInterface_CountArgs = {
  field: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ping: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** This query is used to query for a single asset. */
  asset: Maybe<AssetInterface>;
  /** This query is used to return the number of assets. */
  assetCount: Scalars['Int']['output'];
  /** This query is used to query for assets. */
  assets: Maybe<Array<Maybe<AssetInterface>>>;
  /** Entries within the astroObjects section. */
  astroObjectsEntries: Maybe<Array<Maybe<AstroObjectsSectionEntryUnion>>>;
  /** Entries within the catalogs section. */
  catalogsEntries: Maybe<Array<Maybe<CatalogsSectionEntryUnion>>>;
  /** This query is used to query for categories. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>;
  /** This query is used to query for a single category. */
  category: Maybe<CategoryInterface>;
  /** This query is used to return the number of categories. */
  categoryCount: Scalars['Int']['output'];
  /** Entries within the embeddedViews section. */
  embeddedViewsEntries: Maybe<Array<Maybe<EmbeddedViewsSectionEntryUnion>>>;
  /** This query is used to query for entries. */
  entries: Maybe<Array<Maybe<EntryInterface>>>;
  /** This query is used to query for a single entry. */
  entry: Maybe<EntryInterface>;
  /** This query is used to return the number of entries. */
  entryCount: Scalars['Int']['output'];
  /** This query is used to query for a single global set. */
  globalSet: Maybe<GlobalSetInterface>;
  /** This query is used to query for global sets. */
  globalSets: Maybe<Array<Maybe<GlobalSetInterface>>>;
  ping: Maybe<Scalars['String']['output']>;
  /** Entries within the surveys section. */
  surveysEntries: Maybe<Array<Maybe<SurveysSectionEntryUnion>>>;
  /** Entries within the tours section. */
  toursEntries: Maybe<Array<Maybe<ToursSectionEntryUnion>>>;
};


export type QueryAssetArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAssetCountArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAssetsArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAstroObjectsEntriesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCatalogsEntriesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoriesArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryCountArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEmbeddedViewsEntriesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntriesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntryArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntryCountArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGlobalSetArgs = {
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  handle: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteDescription: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteTitle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGlobalSetsArgs = {
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  handle: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteDescription: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteTitle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySurveysEntriesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryToursEntriesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

export type TagCriteriaInput = {
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']['input']>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User = ElementInterface & UserInterface & {
  __typename?: 'User';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** The user’s addresses. */
  addresses: Maybe<Array<Maybe<AddressInterface>>>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** The user’s email. */
  email: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The user’s first name. */
  firstName: Maybe<Scalars['String']['output']>;
  /** The user’s first name or username. */
  friendlyName: Maybe<Scalars['String']['output']>;
  /** The user’s full name. */
  fullName: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The user’s last name. */
  lastName: Maybe<Scalars['String']['output']>;
  /** The user’s full name or username. */
  name: Scalars['String']['output'];
  /** The user’s photo. */
  photo: Maybe<AssetInterface>;
  /** The user’s preferences. */
  preferences: Scalars['String']['output'];
  /** The user’s preferred language. */
  preferredLanguage: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The username. */
  username: Maybe<Scalars['String']['output']>;
};


export type User_CountArgs = {
  field: Scalars['String']['input'];
};


export type UserAddressesArgs = {
  administrativeArea: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countryCode: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  ownerId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserCriteriaInput = {
  /** Narrows the query results based on whether the users have uploaded any assets. */
  assetUploaders: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on whether the users are listed as the author of any entries. */
  authors: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ creation dates. */
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ last-updated dates. */
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ email addresses. */
  email: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ first names. */
  firstName: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Causes the query results to be returned in the order specified by the `id` argument. */
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the users’ full names. */
  fullName: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the user group the users belong to. */
  group: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to only users that have (or don’t have) a user photo. */
  hasPhoto: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ IDs. */
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Causes the query results to be returned in reverse order. */
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines which site(s) the elements should be queried in, based on their language. */
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ last names. */
  lastName: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Sets the limit for paginated results. */
  limit: InputMaybe<Scalars['Int']['input']>;
  /** Sets the offset for paginated results. */
  offset: InputMaybe<Scalars['Int']['input']>;
  /** Sets the field the returned elements should be ordered by. */
  orderBy: InputMaybe<Scalars['String']['input']>;
  /** Determines which site should be selected when querying multi-site elements. */
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on a reference string. */
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results to elements that relate to an asset list defined with this argument. */
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a category list defined with this argument. */
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to an entry list defined with this argument. */
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a tag list defined with this argument. */
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  /** Narrows the query results to elements that relate to a use list defined with this argument. */
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  /** Narrows the query results to only elements that match a search query. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the unique identifier for an element-site relation. */
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  /** Narrows the query results based on the elements’ slugs. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ titles. */
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the elements’ UIDs. */
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Determines whether only elements with unique IDs should be returned by the query. */
  unique: InputMaybe<Scalars['Boolean']['input']>;
  /** Narrows the query results based on the elements’ URIs. */
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Narrows the query results based on the users’ usernames. */
  username: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** This is the interface implemented by all users. */
export type UserInterface = {
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** The user’s addresses. */
  addresses: Maybe<Array<Maybe<AddressInterface>>>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** The user’s email. */
  email: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The user’s first name. */
  firstName: Maybe<Scalars['String']['output']>;
  /** The user’s first name or username. */
  friendlyName: Maybe<Scalars['String']['output']>;
  /** The user’s full name. */
  fullName: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The user’s last name. */
  lastName: Maybe<Scalars['String']['output']>;
  /** The user’s full name or username. */
  name: Scalars['String']['output'];
  /** The user’s photo. */
  photo: Maybe<AssetInterface>;
  /** The user’s preferences. */
  preferences: Scalars['String']['output'];
  /** The user’s preferred language. */
  preferredLanguage: Maybe<Scalars['String']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The username. */
  username: Maybe<Scalars['String']['output']>;
};


/** This is the interface implemented by all users. */
export type UserInterface_CountArgs = {
  field: Scalars['String']['input'];
};


/** This is the interface implemented by all users. */
export type UserInterfaceAddressesArgs = {
  administrativeArea: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countryCode: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  ownerId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AstroImages_Asset = AssetInterface & ElementInterface & {
  __typename?: 'astroImages_Asset';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Alternative text for the asset. */
  alt: Maybe<Scalars['String']['output']>;
  altText: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the asset file was last modified. */
  dateModified: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The file extension for the asset file. */
  extension: Scalars['String']['output'];
  /** The filename of the asset file. */
  filename: Scalars['String']['output'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int']['output'];
  /** Returns the file’s format. */
  format: Maybe<Scalars['String']['output']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean']['output'];
  /** The height in pixels or null if it’s not an image. */
  height: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** An `<img>` tag based on this asset. */
  img: Maybe<Scalars['String']['output']>;
  /** The file kind. */
  kind: Scalars['String']['output'];
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType: Maybe<Scalars['String']['output']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String']['output'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The file size in bytes. */
  size: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url: Maybe<Scalars['String']['output']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId: Maybe<Scalars['Int']['output']>;
  /** The width in pixels or null if it’s not an image. */
  width: Maybe<Scalars['Int']['output']>;
};


export type AstroImages_Asset_CountArgs = {
  field: Scalars['String']['input'];
};


export type AstroImages_AssetFormatArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type AstroImages_AssetHeightArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type AstroImages_AssetNextArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AstroImages_AssetPrevArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AstroImages_AssetSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>;
};


export type AstroImages_AssetUrlArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type AstroImages_AssetWidthArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};

export type AstroObjectsSectionEntryUnion = AstroObjects_AstroObject_Entry;

export type AstroObjects_AstroObject_Entry = ElementInterface & EntryInterface & {
  __typename?: 'astroObjects_astroObject_Entry';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  astroImage: Array<Maybe<AssetInterface>>;
  astroObjectId: Maybe<Scalars['String']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid: Maybe<Scalars['String']['output']>;
  characteristics: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  dec: Maybe<Scalars['Number']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<EntryInterface>;
  ra: Maybe<Scalars['Number']['output']>;
  /** The revision ID (from the `revisions` table). */
  revisionId: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url: Maybe<Scalars['String']['output']>;
};


export type AstroObjects_AstroObject_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type AstroObjects_AstroObject_EntryAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type AstroObjects_AstroObject_EntryAstroImageArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AstroObjects_AstroObject_EntryChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type AstroObjects_AstroObject_EntryDescendantsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type AstroObjects_AstroObject_EntryLocalizedArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type AstroObjects_AstroObject_EntryNextArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type AstroObjects_AstroObject_EntryParentArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type AstroObjects_AstroObject_EntryPrevArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

export type CatalogsSectionEntryUnion = Catalogs_Catalog_Entry;

export type Catalogs_Catalog_Entry = ElementInterface & EntryInterface & {
  __typename?: 'catalogs_catalog_Entry';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate: Maybe<Scalars['DateTime']['output']>;
  icon: Array<Maybe<AssetInterface>>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent: Maybe<EntryInterface>;
  path: Maybe<Scalars['String']['output']>;
  /** The entry’s post date. */
  postDate: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url: Maybe<Scalars['String']['output']>;
};


export type Catalogs_Catalog_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Catalogs_Catalog_EntryAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Catalogs_Catalog_EntryChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Catalogs_Catalog_EntryDescendantsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Catalogs_Catalog_EntryIconArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Catalogs_Catalog_EntryLocalizedArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Catalogs_Catalog_EntryNextArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Catalogs_Catalog_EntryParentArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Catalogs_Catalog_EntryPrevArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmbeddedViewsSectionEntryUnion = EmbeddedViews_Default_Entry;

export type EmbeddedViews_Default_Entry = ElementInterface & EntryInterface & {
  __typename?: 'embeddedViews_default_Entry';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate: Maybe<Scalars['DateTime']['output']>;
  fov: Maybe<Scalars['Number']['output']>;
  fovMax: Maybe<Scalars['Number']['output']>;
  fovMin: Maybe<Scalars['Number']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** Returns whether this is a draft. */
  isDraft: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId: Maybe<Scalars['Int']['output']>;
  target: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  tour: Array<Maybe<EntryInterface>>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url: Maybe<Scalars['String']['output']>;
};


export type EmbeddedViews_Default_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type EmbeddedViews_Default_EntryAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type EmbeddedViews_Default_EntryChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type EmbeddedViews_Default_EntryDescendantsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type EmbeddedViews_Default_EntryLocalizedArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type EmbeddedViews_Default_EntryNextArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type EmbeddedViews_Default_EntryParentArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type EmbeddedViews_Default_EntryPrevArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type EmbeddedViews_Default_EntryTourArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

export type FactsContentBlocks_MatrixField = FactsContentBlocks_FactsContentBlock_BlockType;

export type FactsContentBlocks_FactsContentBlock_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'factsContentBlocks_factsContentBlock_BlockType';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  body: Maybe<Scalars['String']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int']['output'];
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
};


export type FactsContentBlocks_FactsContentBlock_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};

export type Icons_Asset = AssetInterface & ElementInterface & {
  __typename?: 'icons_Asset';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Alternative text for the asset. */
  alt: Maybe<Scalars['String']['output']>;
  altText: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the asset file was last modified. */
  dateModified: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The file extension for the asset file. */
  extension: Scalars['String']['output'];
  /** The filename of the asset file. */
  filename: Scalars['String']['output'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int']['output'];
  /** Returns the file’s format. */
  format: Maybe<Scalars['String']['output']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean']['output'];
  /** The height in pixels or null if it’s not an image. */
  height: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** An `<img>` tag based on this asset. */
  img: Maybe<Scalars['String']['output']>;
  /** The file kind. */
  kind: Scalars['String']['output'];
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType: Maybe<Scalars['String']['output']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String']['output'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The file size in bytes. */
  size: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url: Maybe<Scalars['String']['output']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId: Maybe<Scalars['Int']['output']>;
  /** The width in pixels or null if it’s not an image. */
  width: Maybe<Scalars['Int']['output']>;
};


export type Icons_Asset_CountArgs = {
  field: Scalars['String']['input'];
};


export type Icons_AssetFormatArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type Icons_AssetHeightArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type Icons_AssetNextArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Icons_AssetPrevArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Icons_AssetSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>;
};


export type Icons_AssetUrlArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type Icons_AssetWidthArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};

export type IntroContentBlocks_MatrixField = IntroContentBlocks_IntroBlock_BlockType;

export type IntroContentBlocks_IntroBlock_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'introContentBlocks_introBlock_BlockType';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  body: Maybe<Scalars['String']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int']['output'];
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
};


export type IntroContentBlocks_IntroBlock_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};

export type PoiAstroObject_PoiAstroObject_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'poiAstroObject_poiAstroObject_BlockType';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  astroObject: Array<Maybe<EntryInterface>>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int']['output'];
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
};


export type PoiAstroObject_PoiAstroObject_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};


export type PoiAstroObject_PoiAstroObject_BlockTypeAstroObjectArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

export type SiteInfo_GlobalSet = ElementInterface & GlobalSetInterface & {
  __typename?: 'siteInfo_GlobalSet';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the global set. */
  handle: Scalars['String']['output'];
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The name of the global set. */
  name: Scalars['String']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  siteDescription: Maybe<Scalars['String']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  siteTitle: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
};


export type SiteInfo_GlobalSet_CountArgs = {
  field: Scalars['String']['input'];
};

export type SurveysSectionEntryUnion = Surveys_Surveys_Entry;

export type Surveys_Surveys_Entry = ElementInterface & EntryInterface & {
  __typename?: 'surveys_surveys_Entry';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** Returns the entry’s canonical ID. */
  canonicalId: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate: Maybe<Scalars['DateTime']['output']>;
  fov: Maybe<Scalars['Number']['output']>;
  fovMax: Maybe<Scalars['Number']['output']>;
  fovMin: Maybe<Scalars['Number']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  imgFormat: Maybe<Scalars['String']['output']>;
  /** Returns whether this is a draft. */
  isDraft: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent: Maybe<EntryInterface>;
  path: Maybe<Scalars['String']['output']>;
  /** The entry’s post date. */
  postDate: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId: Maybe<Scalars['Int']['output']>;
  target: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url: Maybe<Scalars['String']['output']>;
};


export type Surveys_Surveys_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Surveys_Surveys_EntryAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Surveys_Surveys_EntryChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Surveys_Surveys_EntryDescendantsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Surveys_Surveys_EntryLocalizedArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Surveys_Surveys_EntryNextArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Surveys_Surveys_EntryParentArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Surveys_Surveys_EntryPrevArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

export type TourImages_Asset = AssetInterface & ElementInterface & {
  __typename?: 'tourImages_Asset';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Alternative text for the asset. */
  alt: Maybe<Scalars['String']['output']>;
  altText: Maybe<Scalars['String']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the asset file was last modified. */
  dateModified: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The file extension for the asset file. */
  extension: Scalars['String']['output'];
  /** The filename of the asset file. */
  filename: Scalars['String']['output'];
  /** The focal point represented as an array with `x` and `y` keys, or null if it’s not an image. */
  focalPoint: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the folder that the asset belongs to. */
  folderId: Scalars['Int']['output'];
  /** Returns the file’s format. */
  format: Maybe<Scalars['String']['output']>;
  /** Whether a user-defined focal point is set on the asset. */
  hasFocalPoint: Scalars['Boolean']['output'];
  /** The height in pixels or null if it’s not an image. */
  height: Maybe<Scalars['Int']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** An `<img>` tag based on this asset. */
  img: Maybe<Scalars['String']['output']>;
  /** The file kind. */
  kind: Scalars['String']['output'];
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The file’s MIME type, if it can be determined. */
  mimeType: Maybe<Scalars['String']['output']>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<AssetInterface>;
  /** The asset’s path in the volume. */
  path: Scalars['String']['output'];
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<AssetInterface>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The file size in bytes. */
  size: Maybe<Scalars['String']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** Returns a `srcset` attribute value based on the given widths or x-descriptors. */
  srcset: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The full URL of the asset. This field accepts the same fields as the `transform` directive. */
  url: Maybe<Scalars['String']['output']>;
  /** The ID of the volume that the asset belongs to. */
  volumeId: Maybe<Scalars['Int']['output']>;
  /** The width in pixels or null if it’s not an image. */
  width: Maybe<Scalars['Int']['output']>;
};


export type TourImages_Asset_CountArgs = {
  field: Scalars['String']['input'];
};


export type TourImages_AssetFormatArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type TourImages_AssetHeightArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type TourImages_AssetNextArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TourImages_AssetPrevArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TourImages_AssetSrcsetArgs = {
  sizes: Array<Scalars['String']['input']>;
};


export type TourImages_AssetUrlArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type TourImages_AssetWidthArgs = {
  format: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  immediately: InputMaybe<Scalars['Boolean']['input']>;
  interlace: InputMaybe<Scalars['String']['input']>;
  mode: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  transform: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};

export type TourPois_MatrixField = TourPois_TourPoi_BlockType;

export type TourPois_TourPoi_BlockType = ElementInterface & MatrixBlockInterface & {
  __typename?: 'tourPois_tourPoi_BlockType';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  astroObject: Array<Maybe<EntryInterface>>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the field that owns the matrix block. */
  fieldId: Scalars['Int']['output'];
  fov: Maybe<Scalars['Number']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The ID of the primary owner of the Matrix block. */
  primaryOwnerId: Scalars['Int']['output'];
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The sort order of the matrix block within the owner element field. */
  sortOrder: Maybe<Scalars['Int']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the matrix block’s type. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the matrix block’s type. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
};


export type TourPois_TourPoi_BlockType_CountArgs = {
  field: Scalars['String']['input'];
};


export type TourPois_TourPoi_BlockTypeAstroObjectArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

export type TourTheme_Category = CategoryInterface & ElementInterface & {
  __typename?: 'tourTheme_Category';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** The category’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<CategoryInterface>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The category’s children. */
  children: Array<CategoryInterface>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** The category’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<CategoryInterface>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the group that contains the category. */
  groupHandle: Scalars['String']['output'];
  /** The ID of the group that contains the category. */
  groupId: Scalars['Int']['output'];
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<CategoryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<CategoryInterface>;
  /** The category’s parent. */
  parent: Maybe<CategoryInterface>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<CategoryInterface>;
  /** The element’s right position within its structure. */
  rgt: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId: Maybe<Scalars['Int']['output']>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url: Maybe<Scalars['String']['output']>;
};


export type TourTheme_Category_CountArgs = {
  field: Scalars['String']['input'];
};


export type TourTheme_CategoryAncestorsArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourTheme_CategoryChildrenArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourTheme_CategoryDescendantsArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourTheme_CategoryLocalizedArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourTheme_CategoryNextArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourTheme_CategoryParentArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourTheme_CategoryPrevArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

export type TourVariety_Category = CategoryInterface & ElementInterface & {
  __typename?: 'tourVariety_Category';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** The category’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<CategoryInterface>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  /** The category’s children. */
  children: Array<CategoryInterface>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** The category’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<CategoryInterface>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the group that contains the category. */
  groupHandle: Scalars['String']['output'];
  /** The ID of the group that contains the category. */
  groupId: Scalars['Int']['output'];
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<CategoryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<CategoryInterface>;
  /** The category’s parent. */
  parent: Maybe<CategoryInterface>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<CategoryInterface>;
  /** The element’s right position within its structure. */
  rgt: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId: Maybe<Scalars['Int']['output']>;
  thumbnail: Array<Maybe<AssetInterface>>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url: Maybe<Scalars['String']['output']>;
  varietyHandle: Maybe<Scalars['String']['output']>;
};


export type TourVariety_Category_CountArgs = {
  field: Scalars['String']['input'];
};


export type TourVariety_CategoryAncestorsArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourVariety_CategoryChildrenArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourVariety_CategoryDescendantsArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourVariety_CategoryLocalizedArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourVariety_CategoryNextArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourVariety_CategoryParentArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourVariety_CategoryPrevArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type TourVariety_CategoryThumbnailArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ToursSectionEntryUnion = Tours_Tour_Entry;

export type Tours_Tour_Entry = ElementInterface & EntryInterface & {
  __typename?: 'tours_tour_Entry';
  /** Return a number of related elements for a field. */
  _count: Maybe<Scalars['Int']['output']>;
  /** The entry’s ancestors, if the section is a structure. Accepts the same arguments as the `entries` query. */
  ancestors: Array<EntryInterface>;
  /** Whether the element is archived. */
  archived: Maybe<Scalars['Boolean']['output']>;
  backgroundImage: Array<Maybe<AssetInterface>>;
  /** Returns the entry’s canonical ID. */
  canonicalId: Maybe<Scalars['Int']['output']>;
  /** Returns the entry’s canonical UUID. */
  canonicalUid: Maybe<Scalars['String']['output']>;
  /** The entry’s children, if the section is a structure. Accepts the same arguments as the `entries` query. */
  children: Array<EntryInterface>;
  complexity: Maybe<Scalars['Number']['output']>;
  /** The date the element was created. */
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  /** The date the element was last updated. */
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  /** The entry’s descendants, if the section is a structure. Accepts the same arguments as the `entries` query. */
  descendants: Array<EntryInterface>;
  /** The draft ID (from the `drafts` table). */
  draftId: Maybe<Scalars['Int']['output']>;
  /** The name of the draft. */
  draftName: Maybe<Scalars['String']['output']>;
  /** The notes for the draft. */
  draftNotes: Maybe<Scalars['String']['output']>;
  duration: Maybe<Scalars['Number']['output']>;
  /** Whether the element is enabled. */
  enabled: Maybe<Scalars['Boolean']['output']>;
  /** Whether the element is enabled for the site. */
  enabledForSite: Maybe<Scalars['Boolean']['output']>;
  /** The expiry date of the entry. */
  expiryDate: Maybe<Scalars['DateTime']['output']>;
  factsContentBlocks: Array<Maybe<FactsContentBlocks_MatrixField>>;
  factsHeading: Maybe<Scalars['String']['output']>;
  /** The ID of the entity */
  id: Maybe<Scalars['ID']['output']>;
  introContentBlocks: Array<Maybe<IntroContentBlocks_MatrixField>>;
  introHeading: Maybe<Scalars['String']['output']>;
  introSubheading: Maybe<Scalars['String']['output']>;
  /** Returns whether this is a draft. */
  isDraft: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is a revision. */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Returns whether this is an unpublished draft. */
  isUnpublishedDraft: Maybe<Scalars['Boolean']['output']>;
  /** The language of the site element is associated with. */
  language: Maybe<Scalars['String']['output']>;
  /** The element’s level within its structure */
  level: Maybe<Scalars['Int']['output']>;
  /** The element’s left position within its structure. */
  lft: Maybe<Scalars['Int']['output']>;
  /** The same element in other locales. */
  localized: Array<EntryInterface>;
  /** Returns the next element relative to this one, from a given set of criteria. */
  next: Maybe<EntryInterface>;
  /** The entry’s parent, if the section is a structure. */
  parent: Maybe<EntryInterface>;
  /** The entry’s post date. */
  postDate: Maybe<Scalars['DateTime']['output']>;
  /** Returns the previous element relative to this one, from a given set of criteria. */
  prev: Maybe<EntryInterface>;
  /** The revision ID (from the `revisions` table). */
  revisionId: Maybe<Scalars['Int']['output']>;
  /** The revision notes (from the `revisions` table). */
  revisionNotes: Maybe<Scalars['String']['output']>;
  /** The element’s right position within its structure. */
  rgt: Maybe<Scalars['Int']['output']>;
  /** The element’s structure’s root ID */
  root: Maybe<Scalars['Int']['output']>;
  /** The element’s search score, if the `search` parameter was used when querying for the element. */
  searchScore: Maybe<Scalars['Int']['output']>;
  /** The handle of the section that contains the entry. */
  sectionHandle: Scalars['String']['output'];
  /** The ID of the section that contains the entry. */
  sectionId: Scalars['Int']['output'];
  /** The handle of the site the element is associated with. */
  siteHandle: Maybe<Scalars['String']['output']>;
  /** The ID of the site the element is associated with. */
  siteId: Maybe<Scalars['Int']['output']>;
  /** The unique identifier for an element-site relation. */
  siteSettingsId: Maybe<Scalars['ID']['output']>;
  /** The element’s slug. */
  slug: Maybe<Scalars['String']['output']>;
  /**
   * Returns the entry’s canonical ID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalId` instead.
   */
  sourceId: Maybe<Scalars['Int']['output']>;
  /**
   * Returns the entry’s canonical UUID.
   * @deprecated this field has been deprecated since Craft 3.7.7. Use `canonicalUid` instead.
   */
  sourceUid: Maybe<Scalars['String']['output']>;
  /** The element’s status. */
  status: Maybe<Scalars['String']['output']>;
  /** The element’s structure ID. */
  structureId: Maybe<Scalars['Int']['output']>;
  thumbnail: Array<Maybe<AssetInterface>>;
  /** The element’s title. */
  title: Maybe<Scalars['String']['output']>;
  tourPois: Array<Maybe<TourPois_MatrixField>>;
  tourTheme: Array<Maybe<CategoryInterface>>;
  tourVariety: Array<Maybe<CategoryInterface>>;
  /** Whether the element has been soft-deleted. */
  trashed: Maybe<Scalars['Boolean']['output']>;
  /** The handle of the entry type that contains the entry. */
  typeHandle: Scalars['String']['output'];
  /** The ID of the entry type that contains the entry. */
  typeId: Scalars['Int']['output'];
  /** The UID of the entity */
  uid: Maybe<Scalars['String']['output']>;
  /** The element’s URI. */
  uri: Maybe<Scalars['String']['output']>;
  /** The element’s full URL */
  url: Maybe<Scalars['String']['output']>;
};


export type Tours_Tour_Entry_CountArgs = {
  field: Scalars['String']['input'];
};


export type Tours_Tour_EntryAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Tours_Tour_EntryBackgroundImageArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Tours_Tour_EntryChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Tours_Tour_EntryDescendantsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Tours_Tour_EntryFactsContentBlocksArgs = {
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  primaryOwnerId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Tours_Tour_EntryIntroContentBlocksArgs = {
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  primaryOwnerId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Tours_Tour_EntryLocalizedArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Tours_Tour_EntryNextArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Tours_Tour_EntryParentArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Tours_Tour_EntryPrevArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  astroImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  astroObjectId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  backgroundImage: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  before: InputMaybe<Scalars['String']['input']>;
  characteristics: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  complexity: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dec: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  duration: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factsHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  fov: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMax: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fovMin: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  imgFormat: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  introHeading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  introSubheading: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  path: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  postDate: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ra: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  section: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  target: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tour: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourTheme: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  tourVariety: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Tours_Tour_EntryThumbnailArgs = {
  altText: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateModified: InputMaybe<Scalars['String']['input']>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filename: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasAlt: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  includeSubfolders: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  size: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uploader: InputMaybe<Scalars['QueryArgument']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volume: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  width: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Tours_Tour_EntryTourPoisArgs = {
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fieldId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  primaryOwnerId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Tours_Tour_EntryTourThemeArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};


export type Tours_Tour_EntryTourVarietyArgs = {
  ancestorDist: InputMaybe<Scalars['Int']['input']>;
  ancestorOf: InputMaybe<Scalars['Int']['input']>;
  dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descendantDist: InputMaybe<Scalars['Int']['input']>;
  descendantOf: InputMaybe<Scalars['Int']['input']>;
  editable: InputMaybe<Scalars['Boolean']['input']>;
  fixedOrder: InputMaybe<Scalars['Boolean']['input']>;
  group: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  hasDescendants: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  inReverse: InputMaybe<Scalars['Boolean']['input']>;
  language: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leaves: InputMaybe<Scalars['Boolean']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  nextSiblingOf: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Scalars['String']['input']>;
  positionedAfter: InputMaybe<Scalars['Int']['input']>;
  positionedBefore: InputMaybe<Scalars['Int']['input']>;
  preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  prevSiblingOf: InputMaybe<Scalars['Int']['input']>;
  ref: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>;
  relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>;
  relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>;
  relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>;
  relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>;
  search: InputMaybe<Scalars['String']['input']>;
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  structureId: InputMaybe<Scalars['Int']['input']>;
  thumbnail: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  title: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  unique: InputMaybe<Scalars['Boolean']['input']>;
  uri: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  varietyHandle: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>>>;
  withStructure: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmbeddedPageQueryQueryVariables = Exact<{
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type EmbeddedPageQueryQuery = { __typename?: 'Query', embeddedViewsEntries: Array<(
    { __typename?: 'embeddedViews_default_Entry', title: string | null, fov: any | null, fovMax: any | null, fovMin: any | null, target: string | null }
    & { ' $fragmentRefs'?: { 'EmbeddedExplorerFragment': EmbeddedExplorerFragment } }
  ) | null> | null };

export type EmbeddedTourLayoutQueryVariables = Exact<{
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>> | InputMaybe<Scalars['QueryArgument']['input']>>;
}>;


export type EmbeddedTourLayoutQuery = { __typename?: 'Query', toursEntries: Array<{ __typename?: 'tours_tour_Entry', tourPois: Array<{ __typename?: 'tourPois_tourPoi_BlockType', fov: any | null, astroObject: Array<{ __typename?: 'astroObjects_astroObject_Entry', ra: any | null, dec: any | null } | { __typename?: 'catalogs_catalog_Entry' } | { __typename?: 'embeddedViews_default_Entry' } | { __typename?: 'surveys_surveys_Entry' } | { __typename?: 'tours_tour_Entry' } | null> } | null> } | null> | null };

export type EmbeddedTourQueryQueryVariables = Exact<{
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']['input']>> | InputMaybe<Scalars['QueryArgument']['input']>>;
}>;


export type EmbeddedTourQueryQuery = { __typename?: 'Query', toursEntries: Array<{ __typename?: 'tours_tour_Entry', id: string | null, slug: string | null, title: string | null, tourPois: Array<{ __typename?: 'tourPois_tourPoi_BlockType', id: string | null, description: string | null, fov: any | null, astroObject: Array<{ __typename?: 'astroObjects_astroObject_Entry', title: string | null, astroObjectId: string | null, ra: any | null, dec: any | null, characteristics: string | null } | { __typename?: 'catalogs_catalog_Entry' } | { __typename?: 'embeddedViews_default_Entry' } | { __typename?: 'surveys_surveys_Entry' } | { __typename?: 'tours_tour_Entry' } | null> } | null> } | null> | null };

export type TourLayoutQueryVariables = Exact<{
  site: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type TourLayoutQuery = { __typename?: 'Query', toursEntries: Array<{ __typename?: 'tours_tour_Entry', tourPois: Array<{ __typename?: 'tourPois_tourPoi_BlockType', fov: any | null, astroObject: Array<{ __typename?: 'astroObjects_astroObject_Entry', ra: any | null, dec: any | null } | { __typename?: 'catalogs_catalog_Entry' } | { __typename?: 'embeddedViews_default_Entry' } | { __typename?: 'surveys_surveys_Entry' } | { __typename?: 'tours_tour_Entry' } | null> } | null> } | null> | null };

export type EmbeddedExplorerFragment = { __typename?: 'embeddedViews_default_Entry', tour: Array<{ __typename?: 'astroObjects_astroObject_Entry' } | { __typename?: 'catalogs_catalog_Entry' } | { __typename?: 'embeddedViews_default_Entry' } | { __typename?: 'surveys_surveys_Entry' } | { __typename?: 'tours_tour_Entry', id: string | null } | null> } & { ' $fragmentName'?: 'EmbeddedExplorerFragment' };

export type SurveyImageQueryVariables = Exact<{ [key: string]: never; }>;


export type SurveyImageQuery = { __typename?: 'Query', surveysEntries: Array<{ __typename?: 'surveys_surveys_Entry', title: string | null, path: string | null, target: string | null, fovMin: any | null, fovMax: any | null, fov: any | null, imgFormat: string | null } | null> | null };

export const EmbeddedExplorerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmbeddedExplorer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"embeddedViews_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tour"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"tours_tour_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<EmbeddedExplorerFragment, unknown>;
export const EmbeddedPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmbeddedPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"embeddedViewsEntries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"embeddedViews_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"fov"}},{"kind":"Field","name":{"kind":"Name","value":"fovMax"}},{"kind":"Field","name":{"kind":"Name","value":"fovMin"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmbeddedExplorer"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmbeddedExplorer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"embeddedViews_default_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tour"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"tours_tour_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<EmbeddedPageQueryQuery, EmbeddedPageQueryQueryVariables>;
export const EmbeddedTourLayoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmbeddedTourLayout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryArgument"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toursEntries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"tours_tour_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tourPois"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"tourPois_tourPoi_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fov"}},{"kind":"Field","name":{"kind":"Name","value":"astroObject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"astroObjects_astroObject_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ra"}},{"kind":"Field","name":{"kind":"Name","value":"dec"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<EmbeddedTourLayoutQuery, EmbeddedTourLayoutQueryVariables>;
export const EmbeddedTourQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmbeddedTourQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryArgument"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toursEntries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"tours_tour_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"tours_tour_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tourPois"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"tourPois_tourPoi_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"fov"}},{"kind":"Field","name":{"kind":"Name","value":"astroObject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"astroObjects_astroObject_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"astroObjectId"}},{"kind":"Field","name":{"kind":"Name","value":"ra"}},{"kind":"Field","name":{"kind":"Name","value":"dec"}},{"kind":"Field","name":{"kind":"Name","value":"characteristics"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<EmbeddedTourQueryQuery, EmbeddedTourQueryQueryVariables>;
export const TourLayoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TourLayout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"site"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toursEntries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"site"},"value":{"kind":"Variable","name":{"kind":"Name","value":"site"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"tours_tour_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tourPois"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"tourPois_tourPoi_BlockType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fov"}},{"kind":"Field","name":{"kind":"Name","value":"astroObject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"astroObjects_astroObject_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ra"}},{"kind":"Field","name":{"kind":"Name","value":"dec"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TourLayoutQuery, TourLayoutQueryVariables>;
export const SurveyImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SurveyImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"surveysEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"surveys_surveys_Entry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"fovMin"}},{"kind":"Field","name":{"kind":"Name","value":"fovMax"}},{"kind":"Field","name":{"kind":"Name","value":"fov"}},{"kind":"Field","name":{"kind":"Name","value":"imgFormat"}}]}}]}}]}}]} as unknown as DocumentNode<SurveyImageQuery, SurveyImageQueryVariables>;