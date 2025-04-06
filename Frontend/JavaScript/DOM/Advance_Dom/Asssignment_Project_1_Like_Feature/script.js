let box = document.querySelector(".container");
let like = document.querySelector("i");

box.addEventListener("dblclick", () => {
  // Reset styles before animation start
  like.style.opacity = "1";
  like.style.scale = "1";
  like.style.fontSize = "5rem";
  like.style.transition = "opacity 0.5s ease, transform 0.5s ease";

  like.classList.add("like");

  setTimeout(() => {
    like.style.opacity = "0";
    like.style.transform = "scale(2)";
  }, 300);

  // for animation of scale
  setTimeout(() => {
    like.style.transform = "scale(1)";
  }, 1000);
});
