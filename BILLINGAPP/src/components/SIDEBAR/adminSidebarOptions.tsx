/**
 * Componente para las opciones del sidebar de la sección de administración
 * @returns {SidebarOption[]} Las opciones del sidebar
 * @description Este componente se encarga de mostrar las opciones del sidebar de la sección de administración
 * @version 1.0.0
 * @since 1.0.0
 * @category Components
 * @subcategory Sidebar
 * @see SidebarOption
 * @see ROUTES
 */
import Dashboard from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import { SidebarOption } from "../../types/sidebarOptions";
import ROUTES from "../../router/variables_routes";
export const adminSidebarOptions: SidebarOption[] = [
  {
    label: "Dashboard",
    path: "/layout/dashboard",
    icon: Dashboard,
  },
  {
    label: "Admin",
    icon: AdminPanelSettingsIcon,
    subItems: [
      { label: "Usuarios", path: "/layout/users" },
      { label: "Edición de usuarios", path: ROUTES.LAYOUT.UCHILD },
      { label: "Roles", path: "/layout/roles" },
      { label: "Edición de roles", path: "/layout/roles-edit" },
    ],
  },
  {
    label: "Configuración",
    icon: SettingsIcon,
    subItems: [
      { label: "F.O.C", path: "/layout/settings" },
      {
        label: "S.O.C",
        icon: SettingsIcon,
        subItems: [{ label: "F.S.O.C", path: "/layout/settings" }],
      },
      { label: "T.O.C", path: "/layout/settings" },
    ],
  },
  {
    label: "Opcion Extra",
    path: "/layout/opcion-extra",
    icon: SettingsIcon,
  },
];
