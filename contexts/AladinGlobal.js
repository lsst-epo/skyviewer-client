import { createContext } from "react";
import PropTypes from "prop-types";
import defaultOptions from "@/components/viewer/Aladin/defaultOptions";

const AladinGlobalContext = createContext(null);

export const AladinGlobalProvider = AladinGlobalContext.Provider;

export default AladinGlobalContext;
