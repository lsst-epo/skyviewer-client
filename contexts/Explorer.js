import { createContext } from "react";
import PropTypes from "prop-types";

const ExplorerContext = createContext(null);

export const ExplorerProvider = ExplorerContext.Provider;

export default ExplorerContext;
