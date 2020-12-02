import { createContext } from "react";
import PropTypes from "prop-types";
import { internalLinkWithChildrenShape } from "@/shapes/link";
import siteInfoShape from "@/shapes/siteInfo";
import footerContentShape from "@/shapes/footerContent";
import rootPagesShape from "@/shapes/rootPages";

const GlobalDataContext = createContext(null);

function GlobalDataProvider({ data, children }) {
  return (
    <GlobalDataContext.Provider value={data}>
      {children}
    </GlobalDataContext.Provider>
  );
}

GlobalDataProvider.displayName = "GlobalData.Provider";

GlobalDataProvider.propTypes = {
  children: PropTypes.node,
  data: PropTypes.exact({
    headerNavItems: PropTypes.arrayOf(internalLinkWithChildrenShape),
    siteInfo: siteInfoShape,
    footerContent: footerContentShape,
    categories: PropTypes.array,
    rootPages: rootPagesShape,
  }),
};

export default GlobalDataContext;

export { GlobalDataProvider };
