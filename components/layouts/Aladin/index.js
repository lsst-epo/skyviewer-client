import PropTypes from "prop-types";
import Head from "next/head";

export default function AladinLayout({ children }) {
  return (
    <>
      <Head>
        {/* Aladin Lite CSS style file */}
        <link rel="stylesheet" href="/aladin-lite/v2/aladin.css" />

        {/* Aladin Lite has a dependency on the jQuery library */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.1.min.js"
          charSet="utf-8"
        ></script>
        {/* Aladin Lite JS code */}
        <script
          type="text/javascript"
          src="/aladin-lite/v2/aladin.js"
          charSet="utf-8"
        ></script>
        {/* ShareThis JS code */}
        <script
          type="text/javascript"
          src="https://platform-api.sharethis.com/js/sharethis.js#property=60ad29953c756700118ae97f&product=sop"
          async="async"
        ></script>
      </Head>
      <main className="viewer-container">{children}</main>
    </>
  );
}

AladinLayout.propTypes = {
  children: PropTypes.node,
};
