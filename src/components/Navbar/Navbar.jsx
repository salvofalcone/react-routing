import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <ul className={styles.Navbar}>
      <li className={styles.Navbar__Item} key="home">
        <Link to="/" className={styles.Navbar__Item__Link}>
          Home
        </Link>
      </li>
      <li className={styles.Navbar__Item} key="about_us">
        <Link to="/about" className={styles.Navbar__Item__Link}>
          About Us
        </Link>
      </li>
      <li className={styles.Navbar__Item} key="contacts">
        <Link to="/contacts" className={styles.Navbar__Item__Link}>
          Contacts
        </Link>
      </li>
      <li className={styles.Navbar__Item} key="locations">
        <Link to="/locations" className={styles.Navbar__Item__Link}>
          Locations
        </Link>
      </li>
      {/* <li className={styles.Navbar__Item} key="login">
        <Link to="/login" className={styles.Navbar__Item__Link}>
          Login
        </Link>
      </li> */}
    </ul>
  );
};

export default Navbar;
