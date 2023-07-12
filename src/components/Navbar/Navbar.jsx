import { Link } from "react-router-dom";

import { BiChip, BiUserCircle, BiLogOut } from "react-icons/bi";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <p className={styles.Navbar__Logo}>
        <Link to="/" className={styles.Navbar__List__Item__Link}>
          <BiChip />
        </Link>
      </p>

      <ul className={styles.Navbar__List}>
        <li className={styles.Navbar__List__Item} key="home">
          <Link to="/" className={styles.Navbar__List__Item__Link}>
            Home
          </Link>
        </li>

        <li className={styles.Navbar__List__Item} key="about_us">
          <Link to="/about" className={styles.Navbar__List__Item__Link}>
            About Us
          </Link>
        </li>

        <li className={styles.Navbar__List__Item} key="contacts">
          <Link to="/contacts" className={styles.Navbar__List__Item__Link}>
            Contacts
          </Link>
        </li>

        <li className={styles.Navbar__List__Item} key="locations">
          <Link to="/locations" className={styles.Navbar__List__Item__Link}>
            Locations
          </Link>
        </li>
      </ul>

      <span className={styles.Navbar__Login} key="login">
        <Link to="/login" className={styles.Navbar__List__Item__Link}>
          <BiUserCircle />
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
