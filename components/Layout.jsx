import Header from "./Header";
import Footer from "./Footer";
import { Feedback } from "./Feedback";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Feedback />
    </>
  );
};

export default Layout;
