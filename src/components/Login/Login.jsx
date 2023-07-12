import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../mocks/auth";

import styles from "./Login.module.scss";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleUsername = (e) => setUsername(e.target.value);
  const onHandlePassword = (e) => setPassword(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    try {
      if (auth.username === username && auth.password === password) {
        localStorage.setItem("auth", true);
        navigate("/dashboard");
      }
      throw new Error("Credenziali non valide");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.Login}>
      <form onSubmit={onHandleSubmit} className={styles.Login__Form}>
        <h2>Log In</h2>
        <input
          /* value={username} */
          type="text"
          placeholder="Username"
          onChange={onHandleUsername}
          required
        />
        <input
          /* value={password} */
          type="password"
          placeholder="Password"
          onChange={onHandlePassword}
          required
        />
        <input type="submit" value="Log In" className={styles.Login__Submit} />
      </form>
    </div>
  );
};

export default Login;
