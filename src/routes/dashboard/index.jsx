import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { auth } from "../../mocks/auth";

import styles from "../../styles/routes/Dashboard.module.scss";

import { BiChip, BiUserCircle, BiSolidUser, BiLogOut } from "react-icons/bi";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  //   console.log(isLogged);

  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

  //   const pippo = localStorage.getItem("auth");
  //   console.log(pippo);

  //   return <div className={styles.Dashboard}>dashboard generica</div>;

  return isLogged ? (
    <div className={styles.Dashboard}>
      <h2>Dashboard</h2>
      <p>Welcome back, {auth.name}! </p>

      <div className={styles.Logout} onClick={()=>setIsLogged(false)}>
        <BiLogOut />
      </div>
    </div>
  ) : (
    navigate("/login")
  );
}
