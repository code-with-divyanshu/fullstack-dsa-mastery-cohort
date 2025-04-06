let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let x = Math.random() * 90;
  let y = Math.random() * 90;
  let rot = Math.random() * 360;

  var img = document.createElement("img");
  img.setAttribute("src", "./chutki.png");
  img.setAttribute("class", "image");
  img.style.height = "200px";
  img.style.position = "absolute";
  img.style.left = x + `%`;
  img.style.top = y + `%`;
  img.style.rotate = rot + `deg`;

  document.body.appendChild(img);
});
