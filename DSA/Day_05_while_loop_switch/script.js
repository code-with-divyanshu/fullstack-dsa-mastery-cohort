// while loop , switch case, do-while loop

// break and continue

let n = 10;

// break statement
console.log("break Statement");

for (let i = 1; i <= n; i++) {
  if (i == 7) break;
  console.log(i);
}

// continue statement

console.log("Continue Statement");

for (let i = 1; i <= n; i++) {
  if (i == 4) continue;
  console.log(i);
}

// while looop questions

// Q1. Sum of digit

let num = Number(prompt("Enter a number"));
let sumOfNum = 0;

while (num > 0) {
  let rem = num % 10;
  sumOfNum += rem;
  num = Math.floor(num / 10);
}

console.log(sumOfNum);

// Q2. Reverse the number

let num1 = Number(prompt("Enter a number"));
let reverseOfnum1 = 0;
while (num1 > 0) {
  let rem = num1 % 10;
  reverseOfnum1 = reverseOfnum1 * 10 + rem;
  num1 = Math.floor(num1 / 10);
}

console.log(reverseOfnum1);

// Q3. Automorphic number

let num2 = Number(prompt("Enter a number"));
let copyOfN = num2;
let sq = num2 * num2;

let count = 0;
while (num2 > 0) {
  count++;
  num2 = Math.floor(num2 / 10);
}

if (sq % Math.pow(10, count) === copyOfN) {
  console.log("Automorphic Number");
} else {
  console.log("Not Automorphic Number");
}

// Switch Case

// Q1. Print Day based on user input

let num3 = Number(prompt("Enter a number"));

// for various case

switch (num3) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Holiday");
}

// for multiple case , but same output
switch (num3) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekdays");
    break;

  case 6:
  case 7:
    console.log("Weekend");
    break;

  default:
    console.log("Holiday");
}
