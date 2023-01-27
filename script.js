function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("#profile img");
  //const alt = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    // substituir a imagem
    img.setAttribute("src", "./assets/Avatar-light.png");
   // alt.setAttribute("alt", "profile-image-light-mode");
  } else {
    img.setAttribute("src", "./assets/Avatar.png");
    //alt.setAttribute("alt", "profile-image-dark-mode");
  }

  // se tiver light mode, adicionar imagem light
  // se tiver normal, adicionar imagem normal
}
