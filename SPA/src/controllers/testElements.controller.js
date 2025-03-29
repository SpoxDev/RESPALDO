import testElements from "../views/testElements.html";

export default () => {
  const divTestElements = document.createElement("div");
  divTestElements.innerHTML = testElements;

  return divTestElements;
};
