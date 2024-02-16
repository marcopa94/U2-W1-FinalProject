const content = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 450) {
    content.style.backgroundColor = "white";
  } else {
    content.style.backgroundColor = "#ffc017";
  }
});
