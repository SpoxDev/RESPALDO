// types/sidebarOptions.ts
import { SvgIconComponent } from "@mui/icons-material";

export interface SidebarOption {
  label: string;
  path?: string;
  icon: SvgIconComponent;
  subItems?: {
    label: string;
    path?: string;
    icon?: SvgIconComponent;
    subItems?: {
      label: string;
      path: string;
      icon?: SvgIconComponent;
    }[];
  }[];
}

// export type SidebarOption = {
//   label: string;
//   path?: string;
//   icon?: React.ElementType;
//   subItems?: SidebarOption[];
// };
