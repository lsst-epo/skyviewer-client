import PLACEHOLDER_TOURS from "@/fixtures/placeholderTours";
import PLACEHOLDER_POIS from "@/fixtures/testPois";

export const getTourData = (id) => {
  if (!id) return;
  const tour = PLACEHOLDER_TOURS.find((tour) => +id === tour.id);
  tour.pois = PLACEHOLDER_POIS;
  return tour;
};

export const getPoiData = (pois, id) => {
  return pois.find((poi) => +id === poi.id);
};
