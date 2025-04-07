import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../assets/styles/layout.css";
export default function Layout() {
  return (
    <>
      <div className={"layout-container"}>
        <div className={"layout-header"}>
          <Topbar />
        </div>
        <div className={"layout-content"}>
          <Sidebar />
          <main className={"layout-main"}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
