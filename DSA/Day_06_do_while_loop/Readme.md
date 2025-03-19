# JavaScript Basics - Day 6 (Do-While Loop)

This document covers **do-while loops** in JavaScript, along with practical examples such as repeating messages, guessing a number, and creating a basic calculator.

---

## 🔄 Do-While Loop in JavaScript

The **do-while** loop executes at least once before checking the condition. This ensures that the loop body runs at least once, even if the condition is false.

---

## 🚀 Do-While Loop Questions

### **1. Repeat 'Hello' Until User Stops**

```js
let userInput;
do {
  console.log("Hello");
  userInput = prompt("Do you want to continue? yes/no");
} while (userInput === "yes");
```

🔹 **This program prints 'Hello' and keeps asking the user if they want to continue.**

---

### **2. Guess the Number Game**

```js
let gameNumber = Math.floor(Math.random() * 100 + 1);
let userNumber;
do {
  userNumber = Number(prompt("Guess the number between 1 to 100"));
  if (isNaN(userNumber) || userNumber < 0 || userNumber > 100) {
    console.log("Please enter a valid number");
    continue;
  }
  if (userNumber > gameNumber) console.log("Too high, try again");
  else if (userNumber < gameNumber) console.log("Too low, try again");
  else console.log("Congrats! You guessed it right.");
} while (userNumber !== gameNumber);
```

🔹 **This program generates a random number and asks the user to guess it. The loop continues until the user guesses correctly.**

---

### **3. Simple Calculator (Sasta Calculator)**

```js
let usersInput2;
do {
  let num1 = Number(prompt("Enter the first number"));
  let operator = prompt("Enter a valid operator (+, -, *, /)");
  let num2 = Number(prompt("Enter the second number"));

  switch (operator) {
    case "+":
      console.log("Result: " + (num1 + num2));
      break;
    case "-":
      console.log("Result: " + (num1 - num2));
      break;
    case "*":
      console.log("Result: " + num1 * num2);
      break;
    case "/":
      if (num2 !== 0) console.log("Result: " + num1 / num2);
      else console.log("Enter a valid number (denominator cannot be zero)");
      break;
    default:
      console.log("Enter a valid operator");
      break;
  }

  usersInput2 = prompt("Do you want to perform another calculation? yes/no");
} while (usersInput2 === "yes");
```

🔹 **This program takes two numbers and an operator as input and performs the calculation repeatedly until the user stops.**

---

## 📌 Summary

✅ **Do-While Loops**: Ensures execution at least once before checking the condition.  
✅ **Practical Applications**: Implemented for repeating messages, number guessing game, and a simple calculator.

# **Day 6 - Assignments (Holi Leave Work) 🏆**

This repository contains **15 JavaScript programming challenges** covering **mathematical computations, number properties, and logic-based problems**.

---

## **📌 Summary**

In this assignment, I worked on solving mathematical and logical problems using **JavaScript**. The key focus areas included:

✅ **Number Properties:** ISBN validation, Harshad numbers, Neon numbers  
✅ **Mathematical Computations:** GCD, LCM, Fibonacci series, sum of even digits  
✅ **Number Theory:** Prime factors, abundant numbers, perfect squares  
✅ **Switch Cases & Loops:** Finding divisors, area calculations

Each problem helped me strengthen my **problem-solving skills, logical thinking, and number manipulation techniques**.

---

## **📂 Questions and Explanations**

### **1️⃣ ISBN Number Validation**

Checks if a 10-digit number follows ISBN validation rules.

```js
function isIsbn(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += (i + 1) * n[i];
  }

  if (sum % 11 === 0) {
    console.log(`${n} is a valid ISBN`);
  } else {
    console.log(`${n} is not a valid ISBN`);
  }
}

isIsbn("020131452"); // is not a valid ISBN
isIsbn("0471958697"); // is  a valid ISBN
```

### **2️⃣ HCF/GCD (Greatest Common Divisor)**

Finds the largest number that evenly divides two numbers.

```js
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(12, 18)); // 6
console.log(gcd(12, 20)); // 4
```

### **3️⃣ Harshad (Niven) Number**

Checks if a number is divisible by the sum of its digits.

```js
let isHarshadNumber = (n) => {
  let num = n;
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  if (n % sum === 0) {
    console.log(`${n} is a Harshad Number`);
  } else {
    console.log(`${n} is not a Harshad Number`);
  }
};

isHarshadNumber(18); // is a Harshad Number
isHarshadNumber(33); // is not a Harshad Number
```

### **4️⃣ Perfect Square**

Verifies if a number is a perfect square.

```js
let isPerfectSqurare = (n) => {
  let num = Math.sqrt(n);
  if (Number.isInteger(num)) {
    console.log(`${n} is a Perfect Square`);
  } else {
    console.log(`${n} is not a Perfect Square`);
  }
};

isPerfectSqurare(25); // is a Perfect Square
isPerfectSqurare(75); // is not a Perfect Square
```

### **5️⃣ Abundant Number**

Finds numbers where the sum of divisors is greater than the number itself.

```js
let isAbundantNumber = (num) => {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  if (sum > num) {
    console.log(`${num} is a Abundant Number`);
  } else {
    console.log(`${num} is not a Abundant Number`);
  }
};

isAbundantNumber(12); // is a Abundant Number
isAbundantNumber(9); //is not a Abundant Number
```

### **6️⃣ Fibonacci Series**

Generates Fibonacci numbers up to a given count.

```js
let fibonacciSeries = (num) => {
  let a = 0,
    b = 1;
  let c;

  if (num >= 1) {
    console.log(a);
  }
  if (num >= 2) {
    console.log(b);
  }

  for (let i = 3; i <= num; i++) {
    c = a + b;
    console.log(c);
    [a, b] = [b, c];
  }
};

fibonacciSeries(6); // 0, 1, 1, 2, 3, 5
```

### **7️⃣ Find Numbers with Exactly X Divisors**

Finds numbers between 1-100 with exactly X divisors.

```js
let exactXDivisor = (x) => {
  let divisor = "";
  for (let i = 1; i < 100; i++) {
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === x) {
      divisor += i + " ";
    }
  }
  console.log(divisor);
};

exactXDivisor(3); // 4, 9, 25, 49
```

### **8️⃣ Prime Factors**

Finds all prime factors of a given number.

```js
let primefactor = (x) => {
  let prmfact = "";
  for (let i = 1; i < 100; i++) {
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      if (x % i === 0) {
        prmfact += i + " ";
      }
    }
  }
  console.log(prmfact);
};

primefactor(30); // 2, 3, 5
```

### **9️⃣ Calculate Area using Switch Statement**

Calculates the area of a **circle, rectangle, or triangle** using a switch case.

```js
function getArea(choice, radius, length, breath, side1, side2, side3) {
  let area = 0;
  switch (choice) {
    case "circle":
      area = Math.PI * radius * radius;
      console.log(`Area of ${choice} is ${area.toFixed(1)}`);
      break;

    case "rectangle":
      area = length * breath;
      console.log(`Area of ${choice} is ${area.toFixed(1)}`);
      break;

    case "triangle":
      let s = Math.floor((side1 + side2 + side3) / 2);
      area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
      console.log(`side1rea of ${choice} is ${area.toFixed(1)}`);
      break;

    default:
      console.log("Please provide valid choice");
      break;
  }
}

getArea("circle", 5); // Area of circle is 78.5
```

### **🔟 Neon Number**

Checks if a number is Neon (sum of square digits equals the number).

```js
let isNeonNumber = (num) => {
  let sq = num * num;
  let sum = 0;
  while (sq > 0) {
    sum += sq % 10;
    sq = Math.floor(sq / 10);
  }

  if (sum === num) {
    console.log(`${num} is a Neon Number`);
  } else {
    console.log(`${num} is not a Neon Number`);
  }
};

isNeonNumber(9); // 9 is a Neon Number
```

### **1️⃣1️⃣ Sum of Even Indexed Fibonacci Numbers**

Finds the sum of Fibonacci numbers at even positions.

```js
let sumOfEvenIndexFibonacciNumber = (num) => {
  let sum = 0;

  let a = 0,
    b = 1;

  for (let i = 0; i < num * 2; i++) {
    let c = a + b;
    [a, b] = [b, c];
    if (i % 2 === 0) {
      sum += c;
    }
  }
  console.log(sum);
};

sumOfEvenIndexFibonacciNumber(4); // 33
```

### **1️⃣2️⃣ Find the Largest Digit in a Number**

Finds the maximum digit in a number.

```js
let largestDigitInNumber = (digit) => {
  let largestDigit = 0;
  while (digit > 0) {
    let rem = digit % 10;
    if (largestDigit < rem) {
      largestDigit = rem;
    } else {
      largestDigit = largestDigit;
    }
    digit = Math.floor(digit / 10);
  }
  console.log(largestDigit);
};

largestDigitInNumber(54839); // 9
```

### **1️⃣3️⃣ Find LCM of Two Numbers**

Finds the **Least Common Multiple (LCM)** of two numbers.

```js
let lcm = (a, b) => {
  console.log((a * b) / gcd(a, b));
};

lcm(12, 15); // 60
```

### **1️⃣4️⃣ Sum of Even Digits in a Number**

Finds the sum of all even digits in a number.

```js
let sumOfEvenDigitNumber = (digit) => {
  let sum = 0;
  while (digit > 0) {
    let rem = digit % 10;
    if (rem % 2 === 0) {
      sum += rem;
    }
    digit = Math.floor(digit / 10);
  }
  console.log(sum);
};

sumOfEvenDigitNumber(2384); // 14
```

### **1️⃣5️⃣ Number of Days in a Month**

Finds the days in a given month, considering leap years.

```js
function numberOfDays(month, year) {
  if (month < 1 || month > 12) {
    console.log("Please Provide Valid Month");
  }

  if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(`The Month have a 29 Days`);
    } else {
      console.log(`The Month have a 28 Days`);
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(`The Month have a 30 Days`);
  } else {
    console.log(`The Month have a 31 Days`);
  }
}

numberOfDays(2, 2024); //"The Month has 29 days
numberOfDays(10, 2013); //"The Month has 31 days
```

---

## **🚀 What I Learned?**

🔹 Deepened my understanding of **mathematical logic and problem-solving**.  
🔹 Practiced **loops, conditionals, and functions** effectively.  
🔹 Improved my **number manipulation skills** for coding interviews.

---

💡 **Looking forward to more challenges in upcoming assignments!** 🚀

🚀 Keep practicing loops to strengthen your logic-building skills! 🔥
