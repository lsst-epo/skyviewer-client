import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import GlobalDataContext from "@/contexts/GlobalData";
import debounce from "lodash/debounce";

export const useGlobalLanguage = () => {
  const { localeInfo } = useContext(GlobalDataContext);
  return localeInfo.language;
};

export const usePathData = () => {
  // this returns the post-domain url goodies from the router

  const router = useRouter();
  const { asPath, pathname, query } = router;
  return { asPath, pathname, query };
};

export const useNavHider = (
  prevScrollPos,
  setPrevScrollPos,
  visible,
  setVisible
) => {
  const handleScroll = debounce(() => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      setVisible(true);
      return;
    }

    if (currentScroll > prevScrollPos && visible === true) {
      // down
      setVisible(false);
    } else if (currentScroll < prevScrollPos && visible === false) {
      // up
      setVisible(true);
    }
    setPrevScrollPos(currentScroll);
  }, 30);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
};

export const makeDateString = (date, locale = "en-US", isShort = false) => {
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

export const makeDateObject = (date, locale = "en-US", isShort = false) => {
  const newDate = new Date(date);
  const options = {
    month: `${isShort ? "short" : "long"}`,
  };
  const dateObject = {
    year: newDate.getFullYear(),
    month: new Intl.DateTimeFormat(locale, options).format(newDate),
    day: newDate.getDate(),
  };
  return dateObject;
};

export const normalizePathData = (pathnameInput) => {
  // params should come in as an object, { key: "value" }
  // however, if there is a querystring in the pathname, we must split them
  // so they are ready to be like this in the calling component:
  // const href = {
  //   pathname: simplePathname,
  //   query: { ...pathParams, ...params },
  // };
  if (!pathnameInput) return { pathParams: {} };

  const pathnameArray = pathnameInput.split("?");
  const simplePathname = pathnameArray.shift();
  const pathname = simplePathname.startsWith("/")
    ? simplePathname
    : "/" + simplePathname;
  const urlParams = new URLSearchParams(pathnameArray.shift());
  const pathParams = Object.fromEntries(urlParams);

  return { pathname, pathParams };
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

export function makeTruncatedString(str, max = 50) {
  const array = str.trim().split(" ");
  const ellipsis = array.length > max ? "..." : "";

  return array.slice(0, max).join(" ") + ellipsis;
}

export function normalizeItemData(items, whichEntry = "entry") {
  return items
    .filter((item) => item?.[whichEntry]?.length > 0)
    .map((item) => item[whichEntry]?.[0]);
}

// CATEGORY STUFF
export const getCategoryId = (categories, slug) => {
  return categories.reduce((a, b) => (b.slug === slug ? a + b.id : a), "");
};

export const getCategoryObject = (categories, id) => {
  const result = categories.filter((c) => c.id === id.toString());
  return result[0];
};
export const getCategoryGroup = (categories, group) => {
  return categories.filter((c) => c.groupHandle === group);
};

// LANGUAGE STUFF
export function getSiteString(langData = "") {
  if (Array.isArray(langData)) {
    return langData[0] === "es" ? "es" : "default";
  } else {
    return langData.includes("/es/") || langData === "es" ? "es" : "default";
  }
}
export function getLangString(langData = "") {
  if (Array.isArray(langData)) {
    return langData[0] === "es" ? "es" : "en-US";
  } else {
    return langData.includes("/es/") || langData === "es" ? "es" : "en-US";
  }
}
