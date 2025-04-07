import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../pages/dashboard";
import Login from "../pages/Login";
import Users from "../pages/Users";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/layout" element={<Layout />}>
          <Route path="/layout/dashboard" element={<Dashboard />} />
          <Route path="/layout/users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
