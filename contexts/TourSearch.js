import { createContext } from "react";

const TourSearchContext = createContext(null);

export const TourSearchProvider = TourSearchContext.Provider;

export default TourSearchContext;
