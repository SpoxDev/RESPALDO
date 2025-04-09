import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../pages/dashboard";
import Login from "../pages/Login";
import Users from "../pages/Users";
import UsersEdit from "../pages/EditUserPage";
import Roles from "../pages/Roles";
import EditRolePage from "../pages/EditRolePage";
// Import de las variables de las rutas
import ROUTES from "./variables_routes";
import NotFound from "../pages/NotFound";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN.BASE} element={<Login />} />
        <Route path={ROUTES.LAYOUT.BASE} element={<Layout />}>
          <Route path={ROUTES.LAYOUT.FCHILD} element={<Dashboard />} />
          <Route path={ROUTES.LAYOUT.SCHILD} element={<Users />} />
          <Route path={ROUTES.LAYOUT.UCHILD} element={<UsersEdit />} />
          <Route path={ROUTES.LAYOUT.TCHILD} element={<Roles />} />
          <Route path={ROUTES.LAYOUT.RCHILD} element={<EditRolePage />} />
        </Route>
        <Route path={ROUTES.NOTFOUND.BASE} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
