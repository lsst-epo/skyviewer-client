export const capitalize = (string) => {
  if (typeof string !== "string") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const hasImage = (imageArray) =>
  !!(imageArray && imageArray.length >= 1 && imageArray[0].url);
