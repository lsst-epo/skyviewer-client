import Head from "next/head";

export default function AladinHead() {
  return (
    <Head>
      {/* Aladin Lite CSS style file */}
      <link rel="stylesheet" href="/aladin-lite/v2/aladin.css" />

      {/* Aladin Lite has a dependency on the jQuery library */}
      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.9.1.min.js"
        charSet="utf-8"
      ></script>
      {/* Aladin Lite JS code */}
      <script
        type="text/javascript"
        src="/aladin-lite/v2/aladin.js"
        charSet="utf-8"
      ></script>
    </Head>
  );
}
