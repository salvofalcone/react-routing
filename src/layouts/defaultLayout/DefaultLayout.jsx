import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import styles from "./index.module.scss";

const DefaultLayout = () => {
  return (
    <div className={styles.Main}> 
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
