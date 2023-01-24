import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Feedback } from "./Feedback";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Feedback />
      <Footer />
    </>
  );
};

export default Layout;
