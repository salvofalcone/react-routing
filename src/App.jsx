import { Outlet } from "react-router-dom";

import DefaultLayout from "./layouts/defaultLayout";

function App() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}

export default App;
