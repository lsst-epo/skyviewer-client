import { createContext } from "react";
import PropTypes from "prop-types";

const TourSortFilterContext = createContext(null);

export const TourSortFilterProvider = TourSortFilterContext.Provider;

export default TourSortFilterContext;
