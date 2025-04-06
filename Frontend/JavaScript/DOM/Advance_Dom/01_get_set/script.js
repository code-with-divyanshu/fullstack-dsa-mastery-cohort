let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let src1 = img1.getAttribute("src");
  let src2 = img2.getAttribute("src");

  img1.setAttribute("src", src2);
  img2.setAttribute("src", src1);
});
