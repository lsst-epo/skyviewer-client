import PropTypes from "prop-types";
import "@/lib/i18n";
import { LayoutTree } from "@moxy/next-layout";
import GlobalStyles from "@/styles/globalStyles";
import styles from "@/styles/styles.scss";
import "focus-visible";

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <LayoutTree Component={Component} pageProps={pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
