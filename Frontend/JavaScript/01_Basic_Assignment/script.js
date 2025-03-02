// Assignments

// 1. Age Category Message :

// let age = Number(prompt("Enter Your Age!"));
// if (age < 18) {
//   console.log("You are a minor");
// } else if (age >= 18 && age <= 60) {
//   console.log("Yor are an adult");
// } else {
//   console.log("You are a senior citizen");
// }

// 2. Even or odd Sum :

// let num1 = Number(prompt("Enter your first number"));
// let num2 = Number(prompt("Enter your second number"));
// let sum = num1 + num2;

// if (sum % 2 === 0) {
//   console.log(sum, "Even Sum");
// } else {
//   console.log(sum, "Odd Sum");
// }

// 3. Character Case Checker:

// let char = prompt("Enter a single character");

// if (char >= "A" && char <= "Z") {
//   console.log("Character in Upper Case");
// } else if (char >= "a" && char <= "z") {
//   console.log("Character in Lower Case");
// } else {
//   console.log("Not a Letter");
// }

// 4. Largest of Three Number

// let num1 = Number(prompt("Enter your first number"));
// let num2 = Number(prompt("Enter your second number"));
// let num3 = Number(prompt("Enter your third number"));

// if (num1 > num2 && num1 > num3) {
//   console.log(`The largest number is: ${num1}`);
// } else if (num2 > num1 && num2 > num3) {
//   console.log(`The largest number is: ${num2}`);
// } else {
//   console.log(`The largest number is: ${num3}`);
// }

// 5. Leap Year Checker

// let year = Number(prompt("Enter Year"));

// if (year % 4 === 0 && year % 100 != 0) {
//   console.log(`${year} : is a leap year`);
// } else {
//   console.log(`${year} : is not a leap year`);
// }

// 6. Simple Calculator

// // let userNum1 = Number(prompt("Enter your first number"));
// let operator = prompt("Enter an operator (+, -, *, /)");
// let userNum2 = Number(prompt("Enter your second number"));

// if (operator == "+") {
//   console.log(userNum1 + userNum2);
// } else if (operator == "-") {
//   console.log(userNum1 - userNum2);
// } else if (operator == "*") {
//   console.log(userNum1 * userNum2);
// } else if (operator == "/") {
//   console.log(userNum1 / userNum2);
// } else {
//   alert("Provide a valid operator");
// }

// 7. Positive, Negative, Zero

// let numInput = Number(prompt("Enter your number"));
// if (numInput > 0) {
//   console.log(`${numInput} : is a positive number`);
// } else if (numInput < 0) {
//   console.log(`${numInput} : is a negative number`);
// } else {
//   console.log(`${numInput} : is a Zero`);
// }

// 8. User Greeting

// let username = prompt("Enter Your Name");
// let time = Number(prompt("Enter Time in 24 Hours format"));

// if (time >= 5 && time < 12) {
//   console.log(`Good Morning: ${username}!`);
// } else if (time >= 12 && time < 17) {
//   console.log(`Good Afternoon: ${username}!`);
// } else if (time >= 17 && time < 21) {
//   console.log(`Good Evening: ${username}!`);
// } else if (time > 24) {
//   alert("Please Provide Valid time");
// } else {
//   console.log(`Good Night: ${username}!`);
// }

// 9. Traffic Light System

// let trafficLight = prompt("Enter Color of Traffic Light");

// if (trafficLight === "Red") {
//   console.log("Stop!");
// } else if (trafficLight === "Yellow") {
//   console.log("Get Ready!");
// } else if (trafficLight === "Green") {
//   console.log("Go!");
// } else {
//   alert("Provid Valid Color of Traffic Light");
// }

// 10. Multiplication Table

// let tableNo = Number(prompt("Enter your number"));

// for (let i = 1; i <= 10; i++) {
//   let multiplication = tableNo * i;
//   console.log(`${tableNo} x ${i} = ${multiplication}`);
// }

// 11. Grade Calculator

// let marks = Number(prompt("Enter your marks (0-100)"));

// if (marks >= 90 && marks <= 100) {
//   console.log("Grade : A");
// } else if (marks >= 80 && marks <= 89) {
//   console.log("Grade : B");
// } else if (marks >= 70 && marks <= 79) {
//   console.log("Grade : C");
// } else if (marks >= 60 && marks <= 69) {
//   console.log("Grade : D");
// } else if (marks < 60) {
//   console.log("Grade : F");
// } else {
//   alert("Enter Valid Marks between 0-100");
// }

// 12. Simple login System

// let username = "Karan";
// let password = "Js@123";

// let inputUsername = prompt("Enter Username to Login");
// let inputPassword = prompt("Enter Password to Login");

// if (inputUsername === username && inputPassword === password) {
//   console.log("Login Successful");
// } else {
//   console.log("Incorrect username or password");
// }

// 13. Swapping Without Third Variable

// let numb1 = Number(prompt("Enter your first number"));
// let numb2 = Number(prompt("Enter your second number"));

// numb1 = numb1 + numb2; //  total
// numb2 = numb1 - numb2; //  num2 = 1st no you provide
// numb1 = numb1 - numb2; // num1 = 2nd no you provide

// console.log(numb1, numb2); // now number will be swapp

// 14. FizzBuzz(Multiple of Both)

// let numb = Number(prompt("Enter your number"));

// if (numb % 3 === 0 && numb % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (numb % 3 === 0) {
//   console.log("Fizz");
// } else if (numb % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log(numb);
// }

// 15. Number Reversal

// let num = Number(prompt("Enter your three digit number"));

// let reverse = 0;
// while (num > 0) {
//   reverse = reverse * 10 + (num % 10);
//   num = Math.floor(num / 10);
// }
// console.log(reverse);

// 16. Sum of Digits

// let num = Number(prompt("Enter your number"));

// let sum = 0;
// while (num > 0) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// 17.
