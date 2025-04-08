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
