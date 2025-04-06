let btn = document.querySelector("button");
let percent = document.querySelector("#percent");
let growth = document.querySelector("#growth");

btn.addEventListener("click", () => {
  let count = 0;
  let interval = setInterval(() => {
    count++;
    percent.innerHTML = `${count}%`;
    growth.style.width = `${count}%`;
    if (count === 100) {
      btn.disabled = true;
      btn.style.filter = "blur(2px)";
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
});
