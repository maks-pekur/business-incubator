import Document, { Html, Head, Main, NextScript } from "next/document";

import i18nextConfig from "../next-i18next.config";

export default class MyDocument extends Document {
  render() {
    const { lanaguage } = this.props.__NEXT_DATA__.query;
    return (
      <Html lang={lanaguage}>
        <Head>
          <title>Freedom Business Area</title>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta
            name="google-site-verification"
            content="SB16TdykZEn6_pIqcqEj-m73nn2K-7anuDpSTDORYlA"
          />
          <meta
            name="description"
            content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
          />
          <meta property="og:title" content="Freedom Business Area" />
        </Head>
        <body className="overflowX-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
