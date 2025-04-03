import notFound from "../views/404.html";
export default () => {
  const divNotFoundCont = document.createElement("div");
  divNotFoundCont.classList = "notpath-container";
  divNotFoundCont.innerHTML = notFound;

  divNotFoundCont.querySelectorAll(".btn-home").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.hash = e.target.getAttribute("href");
    });
  });

  return divNotFoundCont;
};
