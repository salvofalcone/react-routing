import { Outlet } from "react-router-dom";


import style from "./App.module.scss";
import DefaultLayout from "./layouts/defaultLayout";

function App() {
  return (
    <>
      <div className={style.App}>
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      </div>
    </>
  );
}

export default App;
