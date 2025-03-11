# JavaScript Basics - Day 4 (Loops)

This document contains JavaScript loop-based problem-solving questions covered on **Day 4**. These questions focus on using **for loops** to solve different numerical and logical problems.

---

## 🚀 Looping in JavaScript (for loop)

### **1. Print 'Hello World' n times**

```js
let n = Number(prompt("Enter a number"));

if (isNaN(n)) {
  console.log("Invalid Input");
} else {
  for (let i = 1; i <= n; i++) {
    console.log("Hello World");
  }
}
```

🔹 **Takes an integer input and prints 'Hello World' n times.**

### **2. Print natural numbers up to n**

```js
let nb = Number(prompt("Enter a number"));

for (let i = 1; i <= nb; i++) {
  console.log(i);
}
```

🔹 **Prints numbers from 1 to n.**

### **3. Print numbers from n to 1 (Reverse Loop)**

```js
let n1 = Number(prompt("Enter a number"));

for (let i = n1; i >= 1; i--) {
  console.log(i);
}
```

🔹 **Prints numbers in descending order from n to 1.**

### **4. Print the multiplication table of a number**

```js
let num = Number(prompt("Enter a number"));

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
```

🔹 **Prints the multiplication table of a given number.**

### **5. Sum of numbers up to n**

```js
let n2 = Number(prompt("Enter a number"));
let sum = 0;

for (let i = 0; i <= n2; i++) {
  sum += i;
}

console.log(sum);
```

🔹 **Calculates and prints the sum of numbers from 1 to n.**

### **6. Factorial of a number**

```js
let n3 = Number(prompt("Enter a number"));
let fact = 1;

for (let i = 1; i <= n3; i++) {
  fact *= i;
}

console.log(fact);
```

🔹 **Calculates the factorial of a number (n! = n × (n-1) × ... × 1).**

### **7. Sum of all even & odd numbers in a range**

```js
let n4 = Number(prompt("Enter a number"));

let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= n4; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log("Even Sum " + evenSum);
console.log("Odd Sum " + oddSum);
```

🔹 **Separately sums up all even and odd numbers from 1 to n.**

### **8. Print all factors of a number**

```js
let n5 = Number(prompt("Enter a number"));

for (let i = 1; i <= n5 / 2; i++) {
  if (n5 % i === 0) {
    console.log(i);
  }
}
console.log(n5);
```

🔹 **Prints all divisors (factors) of a number.**

### **9. Check if a number is Prime**

```js
let num1 = Number(prompt("Enter your Number"));

isPrime = isPrimeFun(num1);
console.log(isPrime ? "Prime Number" : "Not Prime");

function isPrimeFun(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
```

🔹 **Checks if a number is prime using an optimized algorithm (O(√n) complexity).**

### **10. Compute a raised to the power b**

#### **Method 1: Using Math.pow()**

```js
let nb1 = Number(prompt("Enter base"));
let nb2 = Number(prompt("Enter exponent"));
console.log(Math.pow(nb1, nb2));
```

#### **Method 2: Using Loop (Effective Approach)**

```js
let pow = 1;

for (let i = 0; i < Math.abs(nb2); i++) {
  pow *= nb1;
}

if (nb2 < 0) {
  console.log(1 / pow);
} else {
  console.log(pow);
}
```

🔹 **Computes power without using built-in functions.**

---

## 📌 Summary

✅ **Looping concepts**: `for` loop used in multiple problem-solving scenarios.  
✅ **Mathematical operations**: Sum, factorial, prime checking, table printing.  
✅ **Efficient algorithms**: Optimized prime number check and power calculation.

🚀 Keep practicing loops to improve logic-building skills! 🔥
