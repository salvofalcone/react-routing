import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import DefaultLayout from "../layouts/defaultLayout";
import Error from "./error.jsx";
import Home from "./home";
import About from "./about";
import Contacts from "./contacts";
import Locations from "./locations";
import Location from "./locations/location";
import Login from "../components/Login";
import Dashboard from "./dashboard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />} errorElement={<Error />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/locations/:id" element={<Location />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
);
