import DataTable from "../components/TABLE/Table";
// Import de los datos de los roles
import { roles } from "../components/ROLES/roles-mockdata";
// Import del encabezado de la tabla
import { HeaderTable } from "../components/ROLES/roles-header-table";
// Import de los estilos
import "../assets/styles/roles.css";
// Import de los estilos de la tabla
import "../assets/styles/table.css";

const paginationModel = { page: 0, pageSize: 5 };

export default function Roles() {
  return (
    <>
      <div className="roles-container">
        <header className="roles-container-header">
          <h1>Gestión de Roles</h1>
        </header>
        <main className="roles-container-main">
          <div className="roles-container-table">
            <DataTable
              rows={roles}
              columns={HeaderTable()}
              paginationModel={paginationModel}
            />
          </div>
        </main>
      </div>
    </>
  );
}
