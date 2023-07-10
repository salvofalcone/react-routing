import { Link } from "react-router-dom";

import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <ul className={style.Navbar}>
      <li className={style.Navbar__Item}>
        <Link to="/" className={style.Navbar__Item__Link}>
          Home
        </Link>
      </li>
      <li className={style.Navbar__Item}>
        <Link to="/about" className={style.Navbar__Item__Link}>
          About Us
        </Link>
      </li>
      <li className={style.Navbar__Item}>
        <Link to="/contacts" className={style.Navbar__Item__Link}>
          Contacts
        </Link>
      </li>
      <li className={style.Navbar__Item}>
        <Link to="/locations" className={style.Navbar__Item__Link}>
          Locations
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
