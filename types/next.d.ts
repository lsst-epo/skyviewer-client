type SearchParams = Record<string, string | Array<string> | undefined>;

/** Layout components cannot access search params, so route segment
 *  props should be extended for Page components with this helper.
 */
type WithSearchParams<T = unknown> = T & {
  /** An object containing the search parameters of the current URL
   * @link https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
   */
  searchParams?: SearchParams;
};
