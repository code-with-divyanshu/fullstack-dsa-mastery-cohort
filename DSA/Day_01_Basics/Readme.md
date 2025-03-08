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

## ⚡ JavaScript Assignment - Increment and Decrement Operations

### **1. Increment and Decrement Operators**

#### **Q1:**

```js
let i = 11;
i = i++ + ++i; // 11 + 13 = 24
console.log(i); // 24
```

#### **Q2:**

```js
let a = 11;
let b = 22;
let c;
c = a + b + a++ + b++ + ++a + ++b; // 11 + 22 + 11 + 22 + 13 + 24 = 103
console.log("a=" + a); // 13
console.log("b=" + b); // 24
console.log("c=" + c); // 103
```

### **2. Complex Increment and Decrement Operations**

#### **Q3:**

```js
let j = 0;
j = j++ - --j + ++j - j--; // 0 - 0 + 1 - 1 = 0
console.log(j); // 0
```

#### **Q4:**

```js
let d = true; // true = 1 in JS
d++;
console.log(d); // 2
```

#### **Q5:**

```js
let k = 1;
let l = 2;
let m = 3;
let n = k-- - l-- - m--; // 1 - 2 - 3 = -4
console.log("k=" + k); // 0
console.log("l=" + l); // 1
console.log("m=" + m); // 2
console.log("n=" + n); // -4
```

### **3. Syntax Errors and Logical Issues**

#### **Q6:**

```js
let num1 = 1;
let num2 = 2;
console.log(--num2 - ++num1 + ++num2 - --num1); // 1 - 2 + 2 - 1 = 0
```

#### **Q7:**

```js
let o = 19;
let p = 29;
let q;
q = o-- - o++ + --p - ++p + --o - p-- + ++o - p++; // -20
console.log("o=" + o); // 19
console.log("p=" + p); // 29
console.log("q=" + q); // -20
```

#### **Q8:** Syntax Error Example

```js
let r = 11;
// let s = --(r++); // ❌ Syntax Error
```

#### **Q9:**

```js
let t = 0;
let u = 0;
let v = --t * --u * u-- * t--; // -1 * -1 * -1 * -1 = 1
console.log(v); // 1
```

#### **Q10:**

```js
let x = 1;
x = x++ + ++x * --x - x--; // 1 + 3 * 2 - 2 = 5
console.log(x); // 5
```

#### **Q11:** Syntax Error Example

```js
// let num3 = 11++; // ❌ Syntax Error
// console.log(num3);
```

#### **Q12:**

```js
let y = 0;
let z = 0;
console.log(--y * y++ * ++z * z++); // -1 * -1 * 1 * 1 = 1
```

## 📌 Summary

- **Addition (`+`)** behaves differently for numbers and strings.
- **`prompt()`** can be used for user input.
- **Multiple ways to swap variables**, including arithmetic and destructuring.
- **Pre and post increment/decrement impact operations differently.**

✅ These fundamental and assignment concepts help you strengthen your JavaScript understanding! 🚀
