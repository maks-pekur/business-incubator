import Document, { Html, Head, Main, NextScript } from "next/document";

import i18nextConfig from "../next-i18next.config";

export default class MyDocument extends Document {
  render() {
    const { lanaguage } = this.props.__NEXT_DATA__.query;
    return (
      <Html lang={lanaguage}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
