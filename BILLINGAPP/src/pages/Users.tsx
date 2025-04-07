// Import de los estilos para la page de usuarios
import "../assets/styles/users.css";
// Import del componente tabla para listar los usuarios
import DataTable from "../components/TABLE/Table";
// Import de los datos de los usuarios
import { users } from "../components/USERS/mockdata";
// Import del encabezado de la tabla
import { HeaderTable } from "../components/USERS/HeaderTable";
// Import de los estilos de la tabla
import "../assets/styles/table.css";

const paginationModel = { page: 0, pageSize: 5, pageCount: 10 };

export default function Users() {
  return (
    <>
      <div className="users-container">
        <header className="users-container-header">
          <h1>Gestión de Usuarios</h1>
        </header>
        <main className="users-container-main">
          <div className="users-container-table">
            <DataTable
              rows={users}
              columns={HeaderTable()}
              paginationModel={paginationModel}
            />
          </div>
        </main>
      </div>
    </>
  );
}
