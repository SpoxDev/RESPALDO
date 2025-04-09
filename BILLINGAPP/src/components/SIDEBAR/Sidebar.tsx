/**
 * Componente Sidebar
 * @param {SidebarOption[]} options - Opciones del sidebar
 * @returns {JSX.Element} - Elemento JSX que representa el sidebar
 * @version 1.0.0
 * @since 1.0.0
 * @category Components
 * @subcategory Sidebar
 * @see SidebarOption
 * @see Link
 */

import "../../assets/styles/sidebar.css";
import { IconButton } from "@mui/material";
import { ChevronLeft, Menu, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SidebarOption } from "../../types/sidebarOptions";

type Props = {
  options: SidebarOption[];
};

export default function Sidebar({ options }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <IconButton sx={{ color: "#0b557f" }} onClick={toggleSidebar}>
          {isCollapsed ? <Menu /> : <ChevronLeft />}
        </IconButton>
      </div>

      <ul className="sidebar-body-list">
        {options.map(({ label, path, icon: Icon, subItems }) => (
          <li
            key={label}
            className={`sidebar-body-list-item ${subItems ? "has-submenu" : ""}`}
          >
            {subItems ? (
              <>
                <div
                  className="submenu-toggle"
                  onClick={() => toggleSubmenu(label)}
                >
                  <Icon className="sidebar-body-list-item-icon" />
                  {!isCollapsed && (
                    <>
                      <span className="sidebar-body-list-item-text">
                        {label}
                      </span>
                      {openSubmenus[label] ? <ExpandLess /> : <ExpandMore />}
                    </>
                  )}
                </div>
                {!isCollapsed && openSubmenus[label] && (
                  <ul className="sidebar-submenu">
                    {subItems.map(({ label: subLabel, path }) => (
                      <li key={subLabel}>
                        <Link
                          className={"sidebar-submenu-item"}
                          to={path || "#"}
                        >
                          {subLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link className="sidebar-body-list-item" to={path || "#"}>
                <Icon className="sidebar-body-list-item-icon" />
                {!isCollapsed && (
                  <span className="sidebar-body-list-item-text">{label}</span>
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
