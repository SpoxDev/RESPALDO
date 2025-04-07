//? Estilos sidebar
import "../assets/styles/sidebar.css";
import { Dashboard, ViewModule } from "@mui/icons-material"; // añade más íconos si necesitas
import { Link } from "react-router-dom";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { ChevronLeft, Menu, ExpandMore, ExpandLess } from "@mui/icons-material";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <>
      <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-header-button">
            <IconButton sx={{ color: "#0b557f" }} onClick={toggleSidebar}>
              {isCollapsed ? <Menu /> : <ChevronLeft />}
            </IconButton>
          </div>
          {/* <h1 className={isCollapsed ? "hidden" : ""}>Sidebar</h1> */}
        </div>

        <div className="sidebar-body">
          <ul className="sidebar-body-list">
            {/* Primer Dashboard */}
            <li className="sidebar-body-list-item">
              <Link to="/layout/dashboard">
                <Dashboard className="sidebar-body-list-item-icon" />
                {!isCollapsed && (
                  <span className="sidebar-body-list-item-text">Dashboard</span>
                )}
              </Link>
            </li>

            {/* Segundo Dashboard como Submenú */}
            <li className="sidebar-body-list-item submenu-item">
              <div onClick={toggleSubmenu} className="submenu-toggle">
                <ViewModule className="sidebar-body-list-item-icon" />
                {!isCollapsed && (
                  <>
                    <span className="sidebar-body-list-item-text">Módulos</span>
                    {isSubmenuOpen ? <ExpandLess /> : <ExpandMore />}
                  </>
                )}
              </div>

              {!isCollapsed && isSubmenuOpen && (
                <ul className="sidebar-submenu">
                  <li>
                    <Link to="/layout/users">Módulo 1</Link>
                  </li>
                  <li>
                    <Link to="/layout/modulo2">Módulo 2</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
