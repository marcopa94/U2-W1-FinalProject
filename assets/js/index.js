//anim0 le m
const letter = document.querySelector("#letterm").children;
const numC = letter.length; // numero totale m
setInterval(() => {
  const randomNumber = Math.floor(Math.random() * numC);

  //opaCizzo a turno velocita 7secondi
  letter[randomNumber].style.opacity = letter[randomNumber].style.opacity === "1" ? "0" : "1";
}, 20);

//cambio colore header l'ho reso smooth aaggiugnendo transition nel foglio css
const content = document.querySelector("header");
const bottone = document.querySelector(".btn1");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    content.style.backgroundColor = "white";
    bottone.style.backgroundColor = "#1A8917";
  } else {
    content.style.backgroundColor = "#ffc017";
    bottone.style.backgroundColor = "black";
  }
});
