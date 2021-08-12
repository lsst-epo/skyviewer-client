import { createContext } from "react";
import PropTypes from "prop-types";

const AladinFocusContext = createContext(null);

export const AladinFocusProvider = AladinFocusContext.Provider;

export default AladinFocusContext;
