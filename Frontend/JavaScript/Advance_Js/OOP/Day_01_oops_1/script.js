// Obj leteral method

// let obj = {
//   name: "Jhon",
//   age: 30,
//   greet: function () {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old`
//     );
//   },
// };

// let obj2 = {
//   name: "Jane",
//   age: 25,
//   greet: function () {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old`
//     );
//   },
// };

//  constructor function (when Class not in Js)

// function Cupcake() {
//   this.name = "chocolate";
// }

// let Cupcake1 = new Cupcake();
// console.log(Cupcake1);

// Using Classes

// function Toffe(flavor, price, expiry) {
//   this.flavor = flavor;
//   this.price = price;
//   this.expiry = expiry;
// }

// let t1 = new Toffe("vanilla", 2, "14-12-2025");
// console.log(t1);
// let t2 = new Toffe("mango", 4, "13-12-2025");
// console.log(t2);

class Toffee {
  constructor(flavor, color, taste, origin) {
    this.flavor = flavor;
    this.color = color;
    this.taste = taste;
    this.origin = origin;
  }
}

let toffe1 = new Toffee("vanilla", "brown", "sweet", "USA");
console.log(toffe1);

let toffe2 = new Toffee("Kacha Aam", "Green", "sweet & Sour", "INDIA");
console.log(toffe2);
