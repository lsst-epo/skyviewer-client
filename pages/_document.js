import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
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
          {/* Aladin Lite has a dependency on the jQuery library */}
          <Script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.1.min.js"
            strategy="beforeInteractive"
          ></Script>
          {/* Aladin Lite JS code */}
          <Script
            type="text/javascript"
            src="/aladin-lite/v2/aladin.js"
            strategy="beforeInteractive"
          ></Script>
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
