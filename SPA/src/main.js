/* traer css desde main.js dara error, entonces la solucion es tener un loader, que es la manera que le decimos a webpack que etnienda nuevos lenguajes
 */
import "./main.css";
import "./assets/styles/estilos-test.css";
//? Estilos de bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
//? importar rutas
import { ROUTER } from "./routes/index.routes";
//? Import componentes material design
import "./utils/material-import-utils";

ROUTER(window.location.hash);
// Capturar evento cuando cambian las url
// Escuchar cada vez que la ventana del navegador altera la ruta
window.addEventListener("hashchange", () => {
  ROUTER(window.location.hash);
});
