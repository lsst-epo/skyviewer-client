import { createContext } from "react";
import PropTypes from "prop-types";

const FiltersContext = createContext(null);

export const FiltersProvider = FiltersContext.Provider;

export default FiltersContext;
