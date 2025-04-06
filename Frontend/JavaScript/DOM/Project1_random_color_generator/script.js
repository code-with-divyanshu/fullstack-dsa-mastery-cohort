let btn = document.querySelector("button");
let box = document.querySelector("#box");

btn.addEventListener("click", () => {
  let rgbNo1 = Math.floor(Math.random() * 256);
  let rgbNo2 = Math.floor(Math.random() * 256);
  let rgbNo3 = Math.floor(Math.random() * 256);

  box.style.backgroundColor = `rgb(${rgbNo1}, ${rgbNo2}, ${rgbNo3})`;
});
