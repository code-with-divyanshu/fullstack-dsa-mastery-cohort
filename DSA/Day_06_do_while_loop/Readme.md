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

🚀 Keep practicing loops to strengthen your logic-building skills! 🔥
