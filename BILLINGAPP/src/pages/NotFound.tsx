import { Link } from "react-router-dom";
// Estilos de la page de notfound
import "../assets/styles/NotFound.css";
// Rutas
import ROUTES from "../router/variables_routes";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - NotFound</h1>
      <p className="not-found-description">
        La página que estás buscando no existe.
      </p>
      <Link to={ROUTES.LAYOUT.BASE} className="not-found-link">
        Volver al inicio
      </Link>
    </div>
  );
}
