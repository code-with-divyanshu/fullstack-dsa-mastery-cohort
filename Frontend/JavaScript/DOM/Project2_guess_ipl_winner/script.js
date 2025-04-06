// var arr = ["MI", "RCB", "SRH", "CSK", "GT", "LSG", "PBKS", "DC", "LSG", "RR"];

// let btn = document.querySelector("button");
// let title = document.querySelector("#title");

// btn.addEventListener("click", () => {
//   let index = Math.floor(Math.random() * arr.length);
//   let winner = arr[index];
//   title.innerHTML = winner;
// });

var arr = [
  {
    team: "MI",
    pri: "blue",
    sec: "gold",
  },
  {
    team: "RCB",
    pri: "red",
    sec: "black",
  },
  {
    team: "CSK",
    pri: "yellow",
    sec: "green",
  },
  {
    team: "KKR",
    pri: "purple",
    sec: "gold",
  },
  {
    team: "SRH",
    pri: "orange",
    sec: "black",
  },
];

let btn = document.querySelector("button");
let title = document.querySelector("#title");

btn.addEventListener("click", () => {
  let index = Math.floor(Math.random() * arr.length);
  let winner = arr[index];
  title.innerHTML = winner.team;
  title.style.backgroundColor = winner.pri;
  title.style.color = winner.sec;
});
