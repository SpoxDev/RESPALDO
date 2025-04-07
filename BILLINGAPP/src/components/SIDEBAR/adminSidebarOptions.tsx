import Dashboard from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import { SidebarOption } from "../../types/sidebarOptions";

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
      { label: "Roles", path: "/layout/roles" },
    ],
  },
  {
    label: "Configuración",
    path: "/layout/settings",
    icon: SettingsIcon,
  },
  {
    label: "Opcion xd",
    path: "/layout/opcion-xd",
    icon: SettingsIcon,
  },
];
