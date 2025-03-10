# JavaScript Basics - Day 3 (Class + Assignments)

This document contains JavaScript concepts, problem-solving questions, and assignments covered on **Day 3**, focusing on **conditional statements and calculations**.

---

## 🚀 Conditional Statements in JavaScript (Class Questions)

### **1. Find the Greatest of Three Numbers**

```js
let num1 = Number(prompt("Enter first Number"));
let num2 = Number(prompt("Enter second Number"));
let num3 = Number(prompt("Enter third Number"));

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is the greatest among ${num2} and ${num3}`);
} else if (num2 > num1 && num2 > num3) {
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

### **4. Electricity Bill Calculation (Optimized Approach)**

```js
let unit = Number(prompt("Enter your Unit"));
let price = 0;

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

## 🎯 Assignments (Conditional Statements)

### **1. Indian Currency Notes Breakdown**

```js
let amount = Number(prompt("Enter Your Amount in Rupees"));

if (amount >= 2000) {
  console.log(`₹2000 x ${Math.floor(amount / 2000)}`);
  amount = amount % 2000;
}
if (amount >= 500) {
  console.log(`₹500 x ${Math.floor(amount / 500)}`);
  amount = amount % 500;
}
if (amount >= 100) {
  console.log(`₹100 x ${Math.floor(amount / 100)}`);
  amount = amount % 100;
}
console.log(`Remaining ₹1 coins: ${amount}`);
```

🔹 **Breaks down an amount into currency notes.**

### **2. Movie Rating System**

```js
let movieRating = parseFloat(prompt("Enter a movie rating (0-5)"));
let movieName = prompt("Enter a movie Name");

if (movieRating >= 0.0 && movieRating <= 2.0) {
  console.log(`${movieName} is Flop`);
} else if (movieRating > 2.0 && movieRating <= 3.4) {
  console.log(`${movieName} is Semi-hit`);
} else if (movieRating > 3.4 && movieRating <= 4.5) {
  console.log(`${movieName} is Hit`);
} else if (movieRating > 4.5 && movieRating <= 5.0) {
  console.log(`${movieName} is Super-Hit`);
} else {
  console.log(`Invalid Rating for ${movieName}`);
}
```

🔹 **Categorizes movies based on user ratings.**

### **3. Salary Calculation Based on Criteria**

```js
let gender = prompt("Enter your gender (Male/Female)");
let qualification = prompt("Enter your qualification (Graduate/Post-Graduate)");
let yearOfService = parseInt(prompt("Enter your years of service"));
let salary = 0;

if (gender === "Male") {
  if (yearOfService >= 10 && qualification === "Post-Graduate") {
    salary = 15000;
  } else if (
    (yearOfService >= 10 && qualification === "Graduate") ||
    (yearOfService < 10 && qualification === "Post-Graduate")
  ) {
    salary = 10000;
  } else if (yearOfService < 10 && qualification === "Graduate") {
    salary = 7000;
  } else {
    console.log("Invalid qualification or years of service");
  }
} else if (gender === "Female") {
  if (yearOfService >= 10 && qualification === "Post-Graduate") {
    salary = 12000;
  } else if (yearOfService < 10 && qualification === "Post-Graduate") {
    salary = 10000;
  } else if (yearOfService >= 10 && qualification === "Graduate") {
    salary = 9000;
  } else if (yearOfService < 10 && qualification === "Graduate") {
    salary = 6000;
  } else {
    console.log("Invalid qualification or years of service");
  }
} else {
  console.log("Give Valid  Gender");
}

console.log(`Salary: ₹${salary}`);
```

🔹 **Calculates salary based on gender, qualification, and years of service.**

---

## 📌 Summary

✅ **Conditional Statements**: Greatest number, leap year, discount calculation, electricity bill, salary calculation.
✅ **Logical Problem-Solving**: Implementing mathematical conditions in JavaScript.
✅ **Optimized Code**: Using better approaches for calculations.

🚀 Keep practicing to enhance your JavaScript logic! 🔥
