import PropTypes from "prop-types";
import "@/lib/i18n";
import GlobalStyles from "@/styles/globalStyles";
import styles from "@/styles/styles.scss";
import "focus-visible";

function Skyviewer({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

Skyviewer.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default Skyviewer;
