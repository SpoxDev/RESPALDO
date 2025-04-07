// Import de los estilos para la page de usuarios
import "../assets/styles/users.css";
// Import del componente tabla para listar los usuarios
import DataTable from "../components/USERS/TableUser";

export default function Users() {
  return (
    <>
      <div className="users-container">
        <header className="users-container-header">
          <h1>Gestión de Usuarios</h1>
        </header>
        <main className="users-container-main">
          <div className="users-container-table">
            <DataTable />
          </div>
        </main>
      </div>
    </>
  );
}
