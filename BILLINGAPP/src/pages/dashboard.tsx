//? Estilos
import "../assets/styles/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className={"dashboard-container"}>
        <header className={"dashboard-header"}>
          <h1>Dashboard</h1>
        </header>
        <main className={"dashboard-main"}>
          <p>Esta es la pagina de dashboard, aqui podras ver los datos de la empresa y los usuarios.</p>
        </main>
      </div>
    </>
  );
}
