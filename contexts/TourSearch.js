import { createContext } from "react";
import PropTypes from "prop-types";

const TourSearchContext = createContext(null);

export const TourSearchProvider = TourSearchContext.Provider;

export default TourSearchContext;
