import Layout from "../components/Layout";
import { appWithTranslation } from "next-i18next";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
