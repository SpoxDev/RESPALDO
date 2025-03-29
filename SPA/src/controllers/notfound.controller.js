import notFound from "../views/404.html";
export default () => {
  const divNotFoundCont = document.createElement("div");
  divNotFoundCont.classList = "notpath-container";
  divNotFoundCont.innerHTML = notFound;

  return divNotFoundCont;
};
