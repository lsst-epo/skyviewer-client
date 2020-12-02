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
          <link
            rel="stylesheet"
            href="https://aladin.u-strasbg.fr/AladinLite/api/v2/latest/aladin.min.css"
          />

          {/* Aladin Lite has a dependency on the jQuery library */}
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.9.1.min.js"
            charSet="utf-8"
          ></script>
          {/* Aladin Lite JS code */}
          <script
            type="text/javascript"
            src="https://aladin.u-strasbg.fr/AladinLite/api/v2/latest/aladin.min.js"
            charSet="utf-8"
          ></script>
        </Head>
        <body>
          stuff
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
