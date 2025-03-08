// JavaScript Interview Questions

//  1. Increment and Decrement Operators

// Q1.

let i = 11;
i = i++ + ++i; // 11 + 13 = 24
console.log(i); // 24

// Q2.

let a = 11;
let b = 22;
let c;
c = a + b + a++ + b++ + ++a + ++b; // 11 + 22 + 11 + 22 + 13 + 24 = 103
console.log("a=" + a); // 13
console.log("b=" + b); // 24
console.log("c=" + c); // 103

// Q3.
let j = 0;
j = j++ - --j + ++j - j--; // 0 - 0 + 1 - 1 = 0
console.log(j); // 0

// Q4.
let d = true; // true = 1 in js
d++;
console.log(d); // 2

//  2. Complex Increament and Decreament Operations

// Q5.

let k = 1;
let l = 2;
let m = 3;
let n = k-- - l-- - m--; // 1- 2 - 3 = -4

console.log("k=" + k); // 0
console.log("l=" + l); // 1
console.log("m=" + m); // 2
console.log("n=" + n); // -4

// Q6.

let num1 = 1;
let num2 = 2;
console.log(--num2 - ++num1 + ++num2 - --num1); // 1 - 2 + 2 - 1 = 0

// Q7.

let o = 19;
let p = 29;
let q;
q = o-- - o++ + --p - ++p + --o - p-- + ++o - p++; // 19 - 18 + 28 - 29 + 18 - 29 + 19 -28 = 19 - 29 -29 + 19 = -20
console.log("o=" + o); // 19
console.log("p=" + p); // 29
console.log("q=" + q); // -20

// 3. Syntax Errors and Logical Issues

// Q8.

// let r = 11;  // You cannot apply decrement / increment to any increment/decrement.
// let s = --(i++);  // Syntax Error

// Q9.

let t = 0;
let u = 0;
let v = --t * --u * u-- * t--; // -1 * -1 * -1 * -1 = 1
console.log(v); // 1

// Q10.

let x = 1;
x = x++ + ++x * --x - x--; // 1 + 3 * 2 - 2 = 5
console.log(x); // 5

// Q11.

// let num3 = 11++; //  Literals cannot be incremented directly. Instead, store in a variable
// console.log(num3); // Syntax Error

// Q12.

let y = 0;
let z = 0;
console.log(--y * y++ * ++z * z++); // -1 * -1 * 1 * 1 = 1
