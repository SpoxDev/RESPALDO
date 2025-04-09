/**
 * @fileoverview Componente Layout
 * @description Componente que muestra el layout de la aplicación
 * @returns {JSX.Element} - Elemento JSX que representa el layout de la aplicación
 * @param {string} role - Rol del usuario
 * @param {boolean} isAdmin - Indica si el usuario es administrador
 * @param {boolean} isAssistant - Indica si el usuario es asistente
 * @import { Outlet } from "react-router-dom";
 * @import { Sidebar } from "../components/SIDEBAR/Sidebar";
 * @import { Topbar } from "../components/TOPBAR/Topbar";
 * @import { adminSidebarOptions } from "../components/SIDEBAR/adminSidebarOptions";
 * @import { asistenceSidebarOptions } from "../components/SIDEBAR/assitantSidebarOptions";
 */

import { Outlet } from "react-router-dom";
import Sidebar from "../components/SIDEBAR/Sidebar";
import Topbar from "../components/TOPBAR/Topbar";
import "../assets/styles/layout.css";
// import de las opciones del sidebar
import { adminSidebarOptions } from "../components/SIDEBAR/adminSidebarOptions";
// import { asistenceSidebarOptions } from "../components/SIDEBAR/assitantSidebarOptions";
export default function Layout() {
  // Funcion para identificar el rol del usuario

  return (
    <>
      <div className={"layout-container"}>
        <div className={"layout-header"}>
          <Topbar />
        </div>
        <div className={"layout-content"}>
          <Sidebar options={adminSidebarOptions} />
          <main className={"layout-main"}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
