import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import style from "./index.module.scss";
import { Link } from "react-router-dom";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
