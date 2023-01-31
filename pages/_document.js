import Document, { Html, Head, Main, NextScript } from "next/document";

import i18nextConfig from "../next-i18next.config";

export default class MyDocument extends Document {
  render() {
    const { lanaguage } = this.props.__NEXT_DATA__.query;
    return (
      <Html lang={lanaguage}>
        <Head>
          <meta
            name="google-site-verification"
            content="SB16TdykZEn6_pIqcqEj-m73nn2K-7anuDpSTDORYlA"
          />
        </Head>
        <body className="overflow-x-hidden tracking-tighter leading-tight">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
