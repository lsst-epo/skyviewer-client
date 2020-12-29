import Document, { Html, Head, Main, NextScript } from "next/document";
import locales, { getCurrentLocale } from "@/lib/locales";
import AladinHeadMatter from "@/viewer/Aladin/AladinHeadMatter";

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
          <AladinHeadMatter />
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
