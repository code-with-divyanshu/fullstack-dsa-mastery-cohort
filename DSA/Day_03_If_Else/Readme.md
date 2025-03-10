# JavaScript Basics - Day 3

This document contains JavaScript concepts and problem-solving questions covered in class on **Day 3**, focusing on **conditional statements and calculations**.

---

## 🚀 Conditional Statements in JavaScript

### **1. Find the Greatest of Three Numbers**

```js
let num1 = Number(prompt("Enter first Number"));
let num2 = Number(prompt("Enter second Number"));
let num3 = Number(prompt("Enter third Number"));

if (num1 >= num2 && num1 >= num3) {
  console.log(`${num1} is the greatest among ${num2} and ${num3}`);
} else if (num2 >= num1 && num2 >= num3) {
  console.log(`${num2} is the greatest among ${num1} and ${num3}`);
} else {
  console.log(`${num3} is the greatest among ${num1} and ${num2}`);
}
```

🔹 **Finds the largest number** among three user inputs.

### **2. Leap Year Checker**

```js
let year = Number(prompt("Enter Year"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
```

🔹 **Checks if a year is a leap year** using leap year conditions.

### **3. Shop Discount Calculation**

```js
let amount = Number(prompt("Enter your Amount"));
let discount = 0;

if (amount >= 0 && amount <= 5000) {
  discount = 0;
} else if (amount > 5000 && amount <= 7000) {
  discount = 5;
} else if (amount > 7000 && amount <= 9000) {
  discount = 10;
} else if (amount > 9000) {
  discount = 20;
} else {
  console.log("Give a Valid Input");
}

let totalAmount = amount - Math.floor((discount * amount) / 100);
console.log(
  `You got a discount of ${discount}% and your total payable amount is ${totalAmount}`
);
```

🔹 **Applies discount rates** based on the purchase amount.

### **4. Electricity Bill Calculation**

#### **Approach 1: Using if-else Conditions**

```js
let unit = Number(prompt("Enter your Unit"));
let price = 0;

if (unit > 0 && unit <= 100) {
  price = unit * 4.2;
} else if (unit > 100 && unit <= 200) {
  price = 100 * 4.2 + (unit - 100) * 6;
} else if (unit > 200 && unit <= 400) {
  price = 100 * 4.2 + 100 * 6 + (unit - 200) * 8;
} else if (unit > 400) {
  price = 100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13;
}

console.log(`Electricity Bill: ₹${price}`);
```

#### **Approach 2: Optimized Calculation**

```js
if (unit > 400) {
  price = (unit - 400) * 13;
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  price += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  price += (unit - 100) * 6;
  unit = 100;
}

price += unit * 4.2;
console.log(`Electricity Bill: ₹${price}`);
```

🔹 **Calculates electricity bill based on unit consumption** with an optimized approach.

---

## 📌 Summary

✅ **Conditional Statements**: Greatest number, leap year, discount calculation, electricity bill
✅ **Logical Problem-Solving**: Implementing mathematical conditions in JavaScript
✅ **Optimized Code**: Using better approaches for bill calculation

🚀 Keep practicing to enhance your JavaScript logic! 🔥
