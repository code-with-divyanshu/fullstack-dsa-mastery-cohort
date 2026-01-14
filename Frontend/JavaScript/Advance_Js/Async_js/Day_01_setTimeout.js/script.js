// first synchronous code execute on main thread than async code execute on web api
console.log("hey");

setTimeout(() => {
  console.log("hey 2");
}, 1000);

console.log("hey 3");
