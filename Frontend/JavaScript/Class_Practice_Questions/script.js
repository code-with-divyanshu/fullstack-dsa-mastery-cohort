// Day-01 Practice Question

// Topic 1 - Console & Basic Questions

// Q1.  Log "Hello World" 3 diffrent ways

console.log("Hello JavaScript!");
console.warn("Hello World!");
console.error("Hello World!");

// Q2. Perform Calculation

console.log(35 * 2 - 10 / 2 + 7); // 72

// Q3. Print DataType

console.log(typeof 123); // number
console.log(typeof "123"); // string
console.log(typeof true); //  boolean
console.log(typeof null); // object

// Q4. Swap Variable value

let a = 12;
let b = 14;

a = a + b; // total = 26 , a= 26
b = a - b; // b = 26 -14 => b = 12
a = a - b; // b = 26 -12 => b = 14

console.log(a, b); // a = 14, b = 12

// Q5. Use console.group()

console.groupCollapsed("To-Do List");
console.log("Learn Js");
console.log("Learn DSA");
console.log("Learn Web-Development");
console.groupEnd();

// Topic 2 - Variable & Data-Types

// Q6. Modify Const object value

const obj = {
  name: "divyanshu",
  age: 26,
  email: "divyanshubartwal@gmail.com",
};

obj.age = 24; // change object age value
console.log(obj.age); // age = 24

// Q7. Convert String into Number with 3 different method

var num = "50";

console.log(Number(num)); // using Number method
console.log(parseInt(num)); // using parseInt method
console.log(+num); // add + sign before string

// Q8.  Find word in String (without using includes method)

let str = "JavaScript";

console.log(str.indexOf("Script") !== -1); // using indexOf string method
console.log(str.search("Script") !== -1); // using search string method

// Q9. Give sum of 5 numbers array value

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((res, curr) => {
  return res + curr;
});

console.log(sum);

// Q 10. Understanding undefined, null, and NaN in JavaScript

let x;
console.log(x); // undefined (property does not exist)

let y = null;
console.log(y); // null (empty value)

console.log(0 / 0); // NaN  (invalid mathematical operations)
console.log("hello" - 2); // NaN (invalid mathematical operations)
console.log(Math.sqrt(-1)); // NaN (invalid mathematical operations)
