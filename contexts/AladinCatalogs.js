import { createContext } from "react";
import PropTypes from "prop-types";

const AladinCatalogsContext = createContext(null);

export const AladinCatalogsProvider = AladinCatalogsContext.Provider;

export default AladinCatalogsContext;
