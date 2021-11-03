import Document, { Html, Head, Main, NextScript } from "next/document";
import locales, { getCurrentLocale } from "@/lib/locales";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const {
      query: { uriSegments },
    } = ctx;
    const locale = getCurrentLocale(uriSegments);
    return { ...initialProps, lang: locale.lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
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
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
