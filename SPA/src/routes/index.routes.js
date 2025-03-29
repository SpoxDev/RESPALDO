//? importacion de las vistas
import { PAGES } from "../controllers/index";

// Recuperar id para pintar contenido
let content = document.getElementById("app-content");

// Recupero la ruta proveniente de main.js
const ROUTER = async (route) => {
  // inicializar con el contenido vacío
  content.innerHTML = "";
  // Manejo de condicionales para poder realizar las distintas navegaciones
  switch (route) {
    case "": {
      return content.appendChild(PAGES.home());
    }
    case "#/post": {
      return content.appendChild(await PAGES.post());
    }
    case "#/contacto": {
      return content.appendChild(PAGES.contact());
    }
    case "#/test-elementos": {
      return content.appendChild(PAGES.test());
    }
    default:
      return content.appendChild(PAGES.notFound());
  }
};

export { ROUTER };
