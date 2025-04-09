/**
 * @fileoverview Página de asignación de permisos a roles
 * @description Página de asignación de permisos a roles
 * @returns {JSX.Element} - Elemento JSX que representa la página de asignación de permisos a roles
 */

// Import de los estilos
import "../assets/styles/page-asign-permission-to-rol.css";
import DataTable from "../components/TABLE/Table";

// Modelo de paginación para la tabla de permisos a roles
const paginationModel = { page: 0, pageSize: 10, pageCount: 10 };

export default function PageAsignPermissionToRol() {
  return (
    <>
      <div className="container-page-asign-permission-to-rol">
        <header className="container-page-asign-permission-to-rol-header">
          <h1>Asignación de permisos a roles</h1>
        </header>
        <main className="container-page-asign-permission-to-rol-main">
          <div className="container-page-asign-permission-to-rol-main-table">
            <DataTable
              rows={[]}
              columns={[]}
              paginationModel={paginationModel}
              typeForm="permissions-to-roles"
            />
          </div>
        </main>
      </div>
    </>
  );
}
