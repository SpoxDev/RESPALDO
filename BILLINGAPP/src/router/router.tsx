import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../pages/dashboard";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Roles from "../pages/Roles";
// Import de las variables de las rutas
import ROUTES from "./variables_routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN.BASE} element={<Login />} />
        <Route path={ROUTES.LAYOUT.BASE} element={<Layout />}>
          <Route path={ROUTES.LAYOUT.FCHILD} element={<Dashboard />} />
          <Route path={ROUTES.LAYOUT.SCHILD} element={<Users />} />
          <Route path={ROUTES.LAYOUT.TCHILD} element={<Roles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
