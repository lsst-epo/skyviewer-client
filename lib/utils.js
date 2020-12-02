import { useRouter } from "next/router";
import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { getCurrentSite } from "@/lib/locales";
import { useDataList } from "@/api/entries";

export const useList = ({
  excludeId = null,
  limit = 10,
  listTypeId = null,
  section,
}) => {
  const router = useRouter();
  const { query } = router;

  const site = getCurrentSite(query.uriSegments);
  const offset = query.page * limit - limit || null;
  const inReverse = query.sort === "descending";
  const search = query.search ? `"${query.search}"` : null;
  listTypeId = parseInt(query.filter) || listTypeId;

  const results = useDataList({
    excludeId,
    inReverse,
    limit,
    offset,
    search,
    site,
    listTypeId,
    section,
  });
  // let's just keep all the data numbers together!
  if (results?.data) {
    results.data.offset = offset;
    results.data.limit = limit;
    results.data.page = parseInt(query.page) || 1;
  }

  return results;
};

export const usePathData = () => {
  // this returns the post-domain url goodies from the router

  const router = useRouter();
  const { asPath, pathname, query } = router;
  return { asPath, pathname, query };
};

export const normalizePathData = (pathname) => {
  // params should come in as an object, { key: "value" }
  // however, if there is a querystring in the pathname, we must split them
  // so they are ready to be like this in the calling component:
  // const href = {
  //   pathname: simplePathname,
  //   query: { ...pathParams, ...params },
  // };
  if (!pathname) return { pathParams: {} };

  const pathnameArray = pathname.split("?");
  const simplePathname = pathnameArray.shift();
  const urlParams = new URLSearchParams(pathnameArray.shift());
  const pathParams = Object.fromEntries(urlParams);

  return { simplePathname, pathParams };
};

export const makeCustomBreadcrumbs = (rootPageString, rootPages) => {
  const customBreadcrumbs = rootPages
    .filter((p) => p.header.includes(rootPageString))
    .map((p) => p.pageEntry);
  return customBreadcrumbs.flat(1);
};

export const makeDateString = (date, locale, isShort = false) => {
  const newDate = new Date(date);
  const options = {
    year: "numeric",
    month: `${isShort ? "short" : "long"}`,
    day: "numeric",
  };
  let dateString = newDate.toLocaleString(locale, options);
  isShort && (dateString = dateString.replace(",", ""));
  return dateString;
};

export const checkIfBetweenDates = (startDate, endDate) => {
  if (!endDate) {
    return true;
  }

  const currentDate = new Date();
  const from = new Date(startDate);
  const to = new Date(endDate);

  return currentDate > from && currentDate < to;
};

export const createLocationString = (
  city,
  state,
  country,
  address = "",
  isFull = false
) => {
  // logic for displaying city/state in US, city/country outside
  let start;
  let end;
  if (isFull) {
    start = address ? address + ", " : "";
    end = state ? state + ", " + country : country;
  } else {
    end = country === "USA" || country === "United States" ? state : country;
  }
  const loc = `${start || ""}${city ? city + ", " : ""}${end || ""}`;
  return loc;
};

export const getCategoryId = (categories, slug) => {
  return categories.reduce((a, b) => (b.slug === slug ? a + b.id : a), "");
};

export const getCategoryObject = (categories, id) => {
  const result = categories.filter((c) => c.id === id);
  return result.flatten(1);
};
export const getCategoryGroup = (categories, group) => {
  return categories.filter((c) => c.groupHandle === group);
};
