import AccountCircle from "@mui/icons-material/AccountCircle";
import Notifications from "@mui/icons-material/Notifications";
import PowerSettingsNew from "@mui/icons-material/PowerSettingsNew";
import logo from "/logo-page.avif";
import { Divider, Link } from "@mui/material";
import Home from "@mui/icons-material/Home";
import { Link as RouterLink } from "react-router-dom";
import "../assets/styles/topbar.css";

export default function Topbar() {
  return (
    <>
      <div className={"topbar-container"}>
        <div className={"topbar-left"}>
          <Link component={RouterLink} to="/layout">
            <img src={logo} alt="logo" />
          </Link>
          <h2>Modo: Administrador</h2>
        </div>
        <div className={"topbar-right"}>
          <ul className={"topbar-right-list"}>
            <Link className="topbar-right-list-item" component={RouterLink} to="/">
              <Home />
            </Link>
            <li className={"topbar-right-list-item"}>
              <Notifications />
            </li>
            <Link className="topbar-right-list-item" component={RouterLink} to="/">
              <PowerSettingsNew />
            </Link>
            <li className={"topbar-right-list-item"}>
              <Divider />
            </li>
            <li className={"topbar-right-list-item"}>
              <AccountCircle />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
