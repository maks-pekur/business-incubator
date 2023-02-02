import Layout from "../components/Layout";
import { appWithTranslation } from "next-i18next";
import { ModalProvider } from "../contexts/ModalContext";

import "../styles/globals.css";
import Modal from "../components/Modal";

const App = ({ Component, pageProps }) => {
  return (
    <ModalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Modal />
    </ModalProvider>
  );
};

export default appWithTranslation(App);
