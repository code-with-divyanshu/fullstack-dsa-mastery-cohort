// Math Functions

console.log(Math.ceil(10.1)); // 11 => give upper value after point
console.log(Math.floor(10.1)); // 10 => give lower value after point
console.log(Math.round(10.4)); // 10 => round the value to lower if value after point is less than 5
console.log(Math.round(10.6)); // 11 => round the value to higher if value after point is greter than 5
console.log(Math.abs(-8)); // 8 => change negative to positive
console.log(Math.trunc(10.244932494)); // 10 => remove number after point
console.log(Math.pow(5, 2)); // 25 => square of 5
console.log(Math.pow(5, 3)); // 125 => cube of 5
console.log(Math.sqrt(144)); // 12 => square root of 12
console.log(Math.cbrt(27)); // 3  => cube root of 3
console.log(Math.max(10, 6, 76, 23, 2)); // 76 // square of 5
console.log(Math.min(10, 6, 76, 23, 2)); // 2 // squx`are of 5
console.log(Math.random()); // give random number from 0 - 1

//  Q1. Calculate a simple interest

let p = Number(prompt("Enter Principle"));
let r = Number(prompt("Enter a rate"));
let t = Number(prompt("Enter a time"));

console.log(p * Math.pow(1 + r / 1000, t) - p);

// Q2. Generae Otp

console.log(Math.floor(Math.random() * 9000 + 1000)); // this will give value from 1000 to 9999

// Q3. Area of triangle by Heron's formula

let a = Number(prompt("Enter first Number"));
let b = Number(prompt("Enter second Number"));
let c = Number(prompt("Enter third Number"));

if (a + b <= c || a + c <= b || b + c <= a) {
  console.log("Not Possible");
} else {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area);
}

// Q4. Circumference of Circle

let radius = Number(prompt("Enter radius"));
let circum = Math.floor(2 * Math.PI * radius);
console.log(circum);

// if-else conditionals statment

// Q1. Accept Two number and print the greatest between them

let num1 = Number(prompt("Enter first Number"));
let num2 = Number(prompt("Enter second Number"));

if (num1 > num2) {
  console.log(num1 + "is greater than" + num2);
} else {
  console.log(num2 + "is greater than" + num1);
}

// Q2. Accept an integer and Check whether it is an even number or odd.

let num = Number(prompt("Enter your Number"));

if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Q3. Accept name and age form the user.Check if the User is a Valid voter or not.

let age = Number(prompt("Enter your Age"));
let name = prompt("Enter your Name");

if (age >= 18) {
  console.log(`${name} , Yes your are Valid voter`);
} else {
  console.log(`${name} , No your are not Valid voter`);
}
