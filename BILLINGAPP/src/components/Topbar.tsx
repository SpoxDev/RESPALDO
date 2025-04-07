import { useState } from "react";
import {
  Divider,
  Link,
  IconButton,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Notifications from "@mui/icons-material/Notifications";
import PowerSettingsNew from "@mui/icons-material/PowerSettingsNew";
import CloseIcon from "@mui/icons-material/Close";
import Home from "@mui/icons-material/Home";
import { Link as RouterLink } from "react-router-dom";
import logo from "/logo-page.avif";
import "../assets/styles/topbar.css";

export default function Topbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);

  return (
    <>
      <div className="topbar-container">
        <div className="topbar-left">
          <Link component={RouterLink} to="/layout">
            <img src={logo} alt="logo" />
          </Link>
          <h2>Modo: Administrador</h2>
        </div>

        <div className="topbar-right">
          <ul className="topbar-right-list">
            <Link
              className="topbar-right-list-item"
              component={RouterLink}
              to="/"
            >
              <Home />
            </Link>
            <li className="topbar-right-list-item" onClick={handleDrawerOpen}>
              <Notifications />
            </li>
            <Link
              className="topbar-right-list-item"
              component={RouterLink}
              to="/"
            >
              <PowerSettingsNew />
            </Link>
            <li className="topbar-right-list-item">
              <Divider />
            </li>
            <li className="topbar-right-list-item">
              <AccountCircle />
            </li>
          </ul>
        </div>
      </div>

      {/* Drawer personalizado (NO ocupa toda la altura) */}
      {openDrawer && (
        <Slide direction="left" in={openDrawer} mountOnEnter unmountOnExit>
          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              top: "50px", // altura del topbar
              right: 0,
              width: "300px",
              height: "calc(100% - 50px)", // el resto de la pantalla
              zIndex: 1200,
              padding: "1rem",
              borderLeft: "1px solid #ccc",
              backgroundColor: "#fff",
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Notificaciones</Typography>
              <IconButton onClick={handleDrawerClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider sx={{ my: 1 }} />

            {/* Contenido del drawer */}
            <Box>
              <Typography variant="body2">
                No hay nuevas notificaciones.
              </Typography>
            </Box>
          </Paper>
        </Slide>
      )}
    </>
  );
}
