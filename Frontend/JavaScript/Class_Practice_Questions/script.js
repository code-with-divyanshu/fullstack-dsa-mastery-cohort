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

// Day-02 Practice Question

// Topic 3 - Loops

// Q 11. Print 10-1 using while loop

let i = 10;
while (i > 0) {
  console.log(i);
  i--;
} // print 10 to 1

// Q 12. Print multiple of 3 to 30 using while loop

let i = 3;
while (i <= 30) {
  console.log(i);
  i += 3;
} // print all multiple of 3 to 30

// Q 13. Print sum of 1 to 100 using for loop

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum); // print sum = 5050

// Q 14. Print Star pattern using nesetd loop

for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

// Q 15. Use for-of loop iterate over sting "JavaScript"

let str = "JavaScript";

for (let char of str) {
  console.log(char);
} // print char of string

// Day-03 Practice Question

// Topic 4  - Arrays

// Q 16. Remove duplicate values from array

let arr = [1, 2, 1, 1, 2, 4, 4, 3, 4, 3, 5, 6];

let newArr = [...new Set(arr)];

console.log(newArr); // [1,2,3,4,5,6]

// Q 17. Find Second Largest no in an array

let arr = [1, 23, 35, 53, 3, 5, 2, 9, 7, 57, 89];
let newArr = arr.sort((a, b) => b - a);
console.log(newArr[1]); // second largest no in array = 57

// Q 18. short an array in descending order

let arr = [45, 32, 53, 75, 3, 2, 6, 8, 12, 65];
let shortArr = arr.sort((a, b) => b - a);
console.log(shortArr);

// Q 19. Reversed an array value without using .reverse() method

let arr = [23, 42, 12, 67, 74, 34, 53];
let reverseArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reverseArr.push(arr[i]);
}

console.log(reverseArr);

// Q 20. Find the most frequent element in an arrray

let arr = [1, 3, 2, 1, 4, 2, 1, 3, 2, 5, 2];
let obj = {};

// using for each method

arr.forEach((val) => (obj[val] === undefined ? (obj[val] = 1) : obj[val]++));
console.log(obj);

// using for loop

let maxFreq = 0;
let mostFreqNum = null;

for (let num of arr) {
  obj[num] = (obj[num] || 0) + 1;
  if (obj[num] > maxFreq) {
    maxFreq = obj[num];
    mostFreqNum = num;
  }

  console.log(mostFreqNum);
}
