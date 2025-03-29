import POST from "../views/post.html";

// obtener publicaciones
// Esta funcion la llamare siempre y cuando quiera pintar informacion dentro del div "divPostCont"
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};

export default async () => {
  const divPostCont = document.createElement("div");
  divPostCont.innerHTML = POST;

  const lista = divPostCont.querySelector("#list-posts");
  let totalPost = divPostCont.querySelector("#total-post");
  // Se llama a la funcion
  const publicaciones = await getPosts();

  // Se asigna el total de posts
  totalPost.innerHTML = publicaciones.length;

  // recorrer las publicaciones
  publicaciones.forEach((postElement) => {
    lista.innerHTML += `
      <li class="list-group-item border-primary bg-dark text-white" style="padding: 0.5rem; height: fit-content;">
        <h5>${postElement.title}</h5>
        <p>${postElement.body}</p>
      </li>
    `;
  });

  return divPostCont;
};
