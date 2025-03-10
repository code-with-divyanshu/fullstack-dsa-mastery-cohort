// Assignment Conditionals

// Q1. Problem Statement: Indian Currency Notes Breakdown

let amount = Number(prompt("Enter Your Amount in Rupees"));

if (amount >= 2000) {
  console.log(`₹2000  ${Math.floor(amount / 2000)}`);
  amount = amount % 2000;
}
if (amount >= 500) {
  console.log(`₹500 x ${Math.floor(amount / 500)}`);
  amount = amount % 500;
}
if (amount >= 200) {
  console.log(`₹200 x ${Math.floor(amount / 200)}`);
  amount = amount % 200;
}
if (amount >= 100) {
  console.log(`₹100 x ${Math.floor(amount / 100)}`);
  amount = amount % 100;
}
if (amount >= 50) {
  console.log(`₹50 x ${Math.floor(amount / 50)}`);
  amount = amount % 50;
}
if (amount >= 20) {
  console.log(`₹20 x ${Math.floor(amount / 20)}`);
  amount = amount % 20;
}
if (amount >= 10) {
  console.log(`₹10 x ${Math.floor(amount / 10)}`);
  amount = amount % 10;
}
if (amount >= 5) {
  console.log(`₹5 x ${Math.floor(amount / 5)}`);
  amount = amount % 5;
}
if (amount >= 2) {
  console.log(`₹2 x ${Math.floor(amount / 2)}`);
  amount = amount % 2;
}

console.log(`₹1 x ${amount}`);

// Q2. Write a program to accept rating of the movie as double and Movie name as String.

let movieRating = parseFloat(prompt("Enter a movie rating in double"));
let movieName = prompt("Enter a movie Name");

if (movieRating >= 0.0 && movieRating <= 2.0) {
  console.log(`OP - ${movieName} is Flop`);
} else if (movieRating > 2.0 && movieRating <= 3.4) {
  console.log(`OP - ${movieName} is Semi-hit`);
} else if (movieRating > 3.4 && movieRating <= 4.5) {
  console.log(`OP - ${movieName} is Hit`);
} else if (movieRating > 4.5 && movieRating <= 5.0) {
  console.log(`OP - ${movieName} is Super-Hit`);
} else {
  console.log(`Give Valid Rating For movie: ${movieName}`);
}

// Q3. Write a program to calculate the salary as per the following table

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
