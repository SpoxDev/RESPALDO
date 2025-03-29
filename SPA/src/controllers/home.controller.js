import VIEWS from "../views/home.html";

export default () => {
  const divHomeCont = document.createElement("div");
  divHomeCont.classList = "home-container";
  divHomeCont.innerHTML = VIEWS;

  //escuchar el boton de home //! Importante si es getelemenbyid, no detectara al identificador del elemento
  const BTNHOME = divHomeCont.querySelector("#btn-home");
  BTNHOME.addEventListener("click", () => {
    alert("Me clickeaste");
  });
  const BTNMDHOME = divHomeCont.querySelector("#md-button");
  BTNMDHOME.addEventListener("click", () => {
    alert("Clickeaste el boton de material design");
  });

  divHomeCont.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const dataForm = Object.fromEntries(new FormData(e.target));
    alert(JSON.stringify(dataForm));
  });

  return divHomeCont;
};
