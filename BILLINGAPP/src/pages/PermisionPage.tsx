/**
 * @fileoverview Página de permisos
 * @description Página de permisos
 * @version 1.0.0
 * @since 1.0.0
 * @category Pages
 * @subcategory Permissions
 * @see DataTable
 * @see HeaderTable
 * @see ROUTES
 */
// Import de los estilos de la página de permisos
import "../assets/styles/permissions.css";
import DataTable from "../components/TABLE/Table";
// Import de los datos y encabezados de los permisos
import {
  permissions,
  permissionsHeaders,
} from "../server/permissions-mockdata";

/** Modelo de paginación para la tabla de permisos */
const paginationModel = { page: 0, pageSize: 5, pageCount: 10 };

export default function PermisionPage() {
  return (
    <>
      <div className="container-permission-page">
        <header className="container-permission-page-header">
          <h1>Gestión de permisos</h1>
        </header>
        <main className="container-permission-page-main">
          <div className="container-permission-page-table">
            <DataTable
              rows={permissions}
              columns={permissionsHeaders()}
              paginationModel={paginationModel}
              typeForm="permissions"
            />
          </div>
        </main>
      </div>
    </>
  );
}
