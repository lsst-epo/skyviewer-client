import PropTypes from "prop-types";
import "@/lib/i18n";
import { LayoutTree } from "@moxy/next-layout";
import { SourceSansPro } from "@/lib/fonts";
import useResizeObserver from "use-resize-observer";
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
    <div className={SourceSansPro.className} ref={ref}>
      <LayoutTree Component={Component} pageProps={pageProps} />
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
