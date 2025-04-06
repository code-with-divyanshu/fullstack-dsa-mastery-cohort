let btn = document.querySelector("button");
let h2 = document.querySelector("h2");

let flag = false;
btn.addEventListener("click", () => {
  if (!flag) {
    h2.innerHTML = "Request sending....";
    h2.style.color = "gold";
    setTimeout(() => {
      h2.innerHTML = "Friends";
      h2.style.color = "green";
      btn.innerHTML = "Remove Friend";
    }, 3000);
    flag = true;
  } else {
    h2.innerHTML = "Request sending....";
    h2.style.color = "gold";
    setTimeout(() => {
      h2.innerHTML = "Stranger";
      h2.style.color = "Red";
      btn.innerHTML = "Add Friend";
    }, 3000);
    flag = false;
  }
});
