# JavaScript Basics - Day 1

This repository contains fundamental JavaScript programs covering arithmetic operations, string concatenation, user input, variable swapping, and increment/decrement operations.

## 🚀 JavaScript Fundamentals

### **1. Sum of Two Integers**

```js
let num1 = 20;
let num2 = 23;
console.log(num1 + num2); // 43
```

🔹 Adds two numbers **20 + 23 = 43**.

### **2. Relationship Between Integers and Strings**

```js
console.log("Hello" + " World"); // "Hello World"
console.log("Hello" + 2); // "Hello2"
console.log(5 + 6); // 11
```

🔹 **String + String** → Concatenation
🔹 **String + Number** → Concatenation
🔹 **Number + Number** → Arithmetic Addition

### **3. Sum of Two Numbers With Message**

```js
let a = 10;
let b = 23;
console.log(`Sum of ${a} and ${b} is ${a + b}`);
```

🔹 Uses **template literals** to print the result dynamically.

### **4. Accepting a Value From the User**

```js
// let age = prompt("Enter your age");
// console.log(age);
```

🔹 `prompt()` takes user input as a string. (Disabled in some environments like Node.js.)

### **5. Swapping Two Variables**

#### **Using a Third Variable**

```js
let num3 = 21;
let num4 = 12;
let temp = num3;
num3 = num4;
num4 = temp;
console.log(num3, num4); // 12, 21
```

🔹 Stores value in a temporary variable before swapping.

#### **Without Using a Third Variable**

```js
num3 = num3 + num4;
num4 = num3 - num4;
num3 = num3 - num4;
console.log(num3, num4); // 12, 21
```

🔹 Uses arithmetic operations for swapping.

#### **Using Destructuring Assignment**

```js
[num3, num4] = [num4, num3];
console.log(num3, num4); // 12, 21
```

🔹 The simplest and most modern way to swap two variables.

---
