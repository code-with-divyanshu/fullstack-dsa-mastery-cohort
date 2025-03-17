# JavaScript Basics - Day 5 (Loops, Switch Case, Break & Continue)

This document covers **while loops, do-while loops, switch case statements, and break/continue statements** in JavaScript, including practical problems.

---

## 🚀 Break and Continue Statements

### **1. Break Statement**

```js
let n = 10;
console.log("Break Statement");

for (let i = 1; i <= n; i++) {
  if (i == 7) break;
  console.log(i);
}
```

🔹 **Stops execution when `i == 7` and exits the loop.**

### **2. Continue Statement**

```js
console.log("Continue Statement");

for (let i = 1; i <= n; i++) {
  if (i == 4) continue;
  console.log(i);
}
```

🔹 **Skips iteration when `i == 4`, but continues the loop.**

---

## 🔄 While Loop Questions

### **3. Sum of Digits of a Number**

```js
let num = Number(prompt("Enter a number"));
let sumOfNum = 0;

while (num > 0) {
  let rem = num % 10;
  sumOfNum += rem;
  num = Math.floor(num / 10);
}

console.log(sumOfNum);
```

🔹 **Extracts and sums each digit of a number.**

### **4. Reverse a Number**

```js
let num1 = Number(prompt("Enter a number"));
let reverseOfnum1 = 0;
while (num1 > 0) {
  let rem = num1 % 10;
  reverseOfnum1 = reverseOfnum1 * 10 + rem;
  num1 = Math.floor(num1 / 10);
}

console.log(reverseOfnum1);
```

🔹 **Reverses the digits of a given number.**

### **5. Check if a Number is Automorphic**

```js
let num2 = Number(prompt("Enter a number"));
let copyOfN = num2;
let sq = num2 * num2;

let count = 0;
while (num2 > 0) {
  count++;
  num2 = Math.floor(num2 / 10);
}

if (sq % Math.pow(10, count) === copyOfN) {
  console.log("Automorphic Number");
} else {
  console.log("Not Automorphic Number");
}
```

🔹 **A number is automorphic if its square ends with the same number.**

---

## 🎭 Switch Case Statements

### **6. Print the Day Based on User Input**

```js
let num3 = Number(prompt("Enter a number"));

switch (num3) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid input");
}
```

🔹 **Maps numbers 1-7 to corresponding weekdays.**

### **7. Print Weekday or Weekend**

```js
switch (num3) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Invalid input");
}
```

🔹 **Groups multiple cases together for the same output.**

---

## 📌 Summary

✅ **Break and Continue**: Used to control loop execution.  
✅ **While Loops**: Implemented for sum of digits, reversing a number, and automorphic number checking.  
✅ **Switch Case**: Used for mapping values to outputs efficiently.

🚀 Keep practicing loops and conditional statements to strengthen your logic-building skills! 🔥
