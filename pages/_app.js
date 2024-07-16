import PropTypes from "prop-types";
import "@/lib/i18n";
import { LayoutTree } from "@moxy/next-layout";
import useResizeObserver from "use-resize-observer";
import { GlobalStyles } from "@rubin-epo/epo-react-lib/styles";
import styles from "@/styles/styles.scss";
import "focus-visible";

function App({ Component, pageProps }) {
  const { ref } = useResizeObserver({
    onResize: () => {
      document.documentElement.style.setProperty(
        "--window-height",
        `${window.innerHeight}px`
      );
    },
  });

  return (
    <div ref={ref}>
      <GlobalStyles />
      <LayoutTree Component={Component} pageProps={pageProps} />
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
