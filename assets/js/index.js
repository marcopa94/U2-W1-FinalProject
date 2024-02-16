const content = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    content.style.backgroundColor = "white"; // Cambia il colore come preferisci
  } else {
    content.style.backgroundColor = "#ffc017";
  }
});
