import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./App.css";
import style from "./App.module.scss";

function App() {
  return (
    <>
      <div className={style.App}>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
