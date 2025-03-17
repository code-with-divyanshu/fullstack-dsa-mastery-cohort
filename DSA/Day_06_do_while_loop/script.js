// 1. Repeat 'Hello' Until User Stops

let userInput;
do {
  console.log("Hello");
  userInput = prompt("Do you want to continue? yes/no");
} while (userInput === "yes");

// 2. Guess the Number Game

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

// 3. Simple Calculator (Sasta Calculator)

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
