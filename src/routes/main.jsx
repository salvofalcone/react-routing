import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import DefaultLayout from "../layouts/defaultLayout";
import Home from "./home";
import About from "./about";
import Contacts from "./contacts";
import Locations from "./locations";
import Location from "./locations/location";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/locations/:id" element={<Location />} />
    </Route>
  )
);
