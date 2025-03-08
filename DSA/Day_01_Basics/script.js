//  Q 1. sum of two integer

let num1 = 20;
let num2 = 23;
console.log(num1 + num2); // 43

// Q 2. Relation between integer and stirng

console.log("Hello" + " World"); // string + string = string(Concatenation)
console.log("Hello" + 2); // string + number = string(Concatenation)
console.log(5 + 6); // number + number = number(addition)

// Q3. Sum of two number with message

let a = 10;
let b = 23;
console.log(`Sum of ${a} and ${b} is ${a + b}`);

// Q4. Accept a value from user and print

// let age = prompt("Enter your age");
// console.log(age);

// Q5. Swap a two variabless

let num3 = 21;
let num4 = 12;

// using third variable
// let num5 = num3;
// num3 = num4;
// num4 = num5;
// console.log(num3, num4); // swap num3 = 12, num4= 21

// without using third variable
// num3 = num3 + num4; // 33
// num4 = num3 - num4; // 21;
// num3 = num3 - num4; // 12;

// console.log(num3, num4); // swap num3 = 12, num4= 21

// distructing assignment operators
[num3, num4] = [num4, num3];
console.log(num3, num4); // swap num3 = 12, num4= 21
