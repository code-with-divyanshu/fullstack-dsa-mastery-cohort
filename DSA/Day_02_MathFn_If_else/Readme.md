# JavaScript Basics - Day 2

This document contains JavaScript concepts covered in class on **Day 2**, focusing on **Math functions and conditional statements**.

---

## 🚀 Math Functions in JavaScript

### **1. Rounding and Absolute Values**

```js
console.log(Math.ceil(10.1)); // 11 => rounds up
console.log(Math.floor(10.1)); // 10 => rounds down
console.log(Math.round(10.4)); // 10 => rounds to nearest lower if < 5
console.log(Math.round(10.6)); // 11 => rounds to nearest upper if > 5
console.log(Math.abs(-8)); // 8 => absolute value (removes negative sign)
console.log(Math.trunc(10.244932494)); // 10 => removes decimal part
```

### **2. Power and Root Functions**

```js
console.log(Math.pow(5, 2)); // 25 => 5 squared
console.log(Math.pow(5, 3)); // 125 => 5 cubed
console.log(Math.sqrt(144)); // 12 => square root
console.log(Math.cbrt(27)); // 3 => cube root
```

### **3. Maximum, Minimum, and Random Numbers**

```js
console.log(Math.max(10, 6, 76, 23, 2)); // 76 => largest value
console.log(Math.min(10, 6, 76, 23, 2)); // 2 => smallest value
console.log(Math.random()); // Generates a random number between 0 and 1
```

---

## 🎯 Class Questions

### **1. Calculate Simple Interest**

```js
let p = Number(prompt("Enter Principle"));
let r = Number(prompt("Enter a rate"));
let t = Number(prompt("Enter a time"));

console.log(p * Math.pow(1 + r / 1000, t) - p);
```

🔹 Uses the formula: **A = P(1 + R/100)^T - P**

### **2. Generate a 4-digit OTP**

```js
console.log(Math.floor(Math.random() * 9000 + 1000)); // Generates OTP from 1000 - 9999
```

### **3. Area of a Triangle (Heron's Formula)**

```js
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
```

🔹 **Validates if a triangle is possible** and calculates its area.

### **4. Circumference of a Circle**

```js
let radius = Number(prompt("Enter radius"));
let circum = Math.floor(2 * Math.PI * radius);
console.log(circum);
```

🔹 Uses formula: **C = 2πr**

---

## ✅ Conditional Statements in JavaScript

### **1. Find the Greatest of Two Numbers**

```js
let num1 = Number(prompt("Enter first Number"));
let num2 = Number(prompt("Enter second Number"));

if (num1 > num2) {
  console.log(num1 + " is greater than " + num2);
} else {
  console.log(num2 + " is greater than " + num1);
}
```

### **2. Check if a Number is Even or Odd**

```js
let num = Number(prompt("Enter your Number"));

if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

### **3. Check if a User is a Valid Voter**

```js
let age = Number(prompt("Enter your Age"));
let name = prompt("Enter your Name");

if (age >= 18) {
  console.log(`${name}, Yes you are a Valid voter`);
} else {
  console.log(`${name}, No you are not a Valid voter`);
}
```

---

## 📌 Summary

✅ **Math Functions**: Rounding, power, roots, random values, max/min
✅ **Calculations**: Simple interest, OTP generation, triangle area, circle circumference
✅ **Conditional Statements**: Greatest number, even/odd, voter validation

🚀 These fundamental concepts help build a strong JavaScript foundation! Keep practicing! 🔥
