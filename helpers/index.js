import PLACEHOLDER_TOURS from "@/fixtures/placeholderTours";
import PLACEHOLDER_POIS from "@/fixtures/testPois";

export const capitalize = (string) => {
  if (typeof string !== "string") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const hasImage = (imageArray) =>
  !!(imageArray && imageArray.length >= 1 && imageArray[0].url);

export const waitForGlobal = (key, callback) => {
  if (window[key]) {
    callback();
  } else {
    setTimeout(() => {
      waitForGlobal(key, callback);
    }, 100);
  }
};

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

export const getDownloadLink = (uri, name = "download") => {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const getTourData = (id) => {
  if (!id) return null;
  const tour = PLACEHOLDER_TOURS.find((tour) => +id === tour.id);
  tour.pois = PLACEHOLDER_POIS;
  return tour;
};
