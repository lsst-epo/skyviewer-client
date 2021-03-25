import { createContext } from "react";
import PropTypes from "prop-types";

const AladinGlobalContext = createContext(null);

export const AladinGlobalProvider = AladinGlobalContext.Provider;

export default AladinGlobalContext;
