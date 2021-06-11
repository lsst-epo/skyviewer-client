import { createContext } from "react";
import PropTypes from "prop-types";

const ToursContext = createContext(null);

export const ToursProvider = ToursContext.Provider;

export default ToursContext;
