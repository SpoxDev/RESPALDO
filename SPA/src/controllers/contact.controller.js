import contact from "../views/contact.html";

export default () => {
  const divContactCont = document.createElement("div");
  divContactCont.classList = "contact-container";
  divContactCont.innerHTML = contact;

  // api para consumir del backend
  const button2 = divContactCont.querySelector("#getPeliculas");

  button2.addEventListener("click", () => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        renderPeliculas(response);
      });
  });

  function renderPeliculas(peliculas) {
    const peliculasArray = Object.values(peliculas);

    if (peliculasArray.length > 0) {
      const pelicula = peliculasArray[0];
      const listPeliculas = divContactCont.querySelector("#listPeliculas");
      listPeliculas.innerHTML = peliculasArray
        .map((pelicula) => `Title: ${pelicula.title}, Id: ${pelicula.id}, Year: ${pelicula.year}`)
        .join("\n");

      divContactCont.querySelector("#title").textContent = pelicula.title;
      divContactCont.querySelector("#id").textContent = pelicula.id;
      divContactCont.querySelector("#year").textContent = pelicula.year;
    } else {
      divContactCont.querySelector("#title").textContent = "No hay Peliculas";
      divContactCont.querySelector("#id").textContent = "No hay Peliculas";
      divContactCont.querySelector("#year").textContent = "No hay Peliculas";
    }
  }

  return divContactCont;
};
