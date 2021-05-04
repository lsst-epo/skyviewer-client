import { createContext } from "react";
import PropTypes from "prop-types";

const MenuContext = createContext(null);

export const MenuProvider = MenuContext.Provider;

export default MenuContext;
