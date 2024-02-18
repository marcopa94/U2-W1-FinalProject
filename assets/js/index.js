//anim0 le m
const letter = document.querySelector("#letterm").children;
const numChildren = letter.length; // numero totale m
setInterval(() => {
  const randomNumber = Math.floor(Math.random() * numChildren);

  //opaCizzo a turno velocita 7secondi
  letter[randomNumber].style.opacity = letter[randomNumber].style.opacity === "1" ? "0" : "1";
}, 7);

//cambio colore header l'ho reso smooth aaggiugnendo transition nel foglio css
const content = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    content.style.backgroundColor = "white";
  } else {
    content.style.backgroundColor = "#ffc017";
  }
});
