import AccountCircle from "@mui/icons-material/AccountCircle";
import Notifications from "@mui/icons-material/Notifications";
import PowerSettingsNew from "@mui/icons-material/PowerSettingsNew";
import CloseIcon from "@mui/icons-material/Close";
import logo from "/logo-page.avif";
import {
  Divider,
  IconButton,
  Link,
  Typography,
  Paper,
  Box,
  Tooltip,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import "../../assets/styles/topbar.css";
import Home from "@mui/icons-material/Home";

export default function Topbar() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  return (
    <>
      <div className="topbar-container">
        <div className="topbar-left">
          <Link component={RouterLink} to="/layout/dashboard">
            <img src={logo} alt="logo" className="topbar-left-logo" />
          </Link>
          <h3>Modo: Administrador</h3>
        </div>

        <div className="topbar-right">
          <ul className="topbar-right-list">
            <Tooltip title="Inicio" arrow placement="bottom">
              <Link
                className="topbar-right-list-item"
                component={RouterLink}
                to="/"
              >
                <Home />
              </Link>
            </Tooltip>

            <li className="topbar-right-list-item" onClick={toggleDrawer}>
              <Tooltip title="Notificaciones" arrow placement="bottom">
                <Notifications />
              </Tooltip>
            </li>

            <Link
              className="topbar-right-list-item"
              component={RouterLink}
              to="/"
            >
              <Tooltip title="Cerrar sesión" arrow placement="bottom">
                <PowerSettingsNew />
              </Tooltip>
            </Link>

            <li className="topbar-right-list-item">
              <Tooltip title="Cuenta" arrow placement="bottom">
                <AccountCircle />
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>

      {/* Drawer visual dentro del Topbar */}
      <Paper
        elevation={4}
        className={`notification-drawer ${showDrawer ? "open" : ""}`}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Typography variant="h6">Notificaciones</Typography>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box p={2}>
          <Typography>No hay notificaciones nuevas.</Typography>
        </Box>
      </Paper>
    </>
  );
}
