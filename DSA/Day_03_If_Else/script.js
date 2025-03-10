// // Assignment Day - 02

// Q4. Accept three number and print the greatest between them

let num1 = Number(prompt("Enter first Number"));
let num2 = Number(prompt("Enter second Number"));
let num3 = Number(prompt("Enter second Number"));

if (num3 >= num4 && num3 >= num5) {
  console.log(`${num3} is greater than among of the ${num4} or ${num5}`);
} else if (num4 >= num3 && num4 >= num5) {
  console.log(`${num4} is greater than among of the ${num3} or ${num5}`);
} else {
  console.log(`${num5} is greater than among of the ${num3} or ${num4}`);
}

// Q5. Leap Year Checker

let year = Number(prompt("Enter Year"));

if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
  console.log(`${year} : is a leap year`);
} else {
  console.log(`${year} : is not a leap year`);
}

// Q6.  Shop Discount

let amount = Number(prompt("Enter your Amount"));
let discount = 0;

if (amount >= 0 && amount <= 5000) {
  discount = 0;
} else if (amount > 5000 && amount <= 7000) {
  discount = 5;
} else if (amount > 7000 && amount <= 9000) {
  discount = 10;
} else if (amount > 9000) {
  discount = 20;
} else {
  console.log("Give a Valid Input");
}

let totalAmount = amount - Math.floor((discount * amount) / 100);

console.log("You Got Discount of : " + discount + "% = " + totalAmount);

// Q7. Electricity Bill , tricky question

let unit = Number(prompt("Enter your Unit"));
let price = 0;

// // first approach using if-else conditional

// if (unit > 0 && unit <= 100) {
//   price = unit * 4.2;
// } else if (unit > 100 && unit <= 200) {
//   price = 100 * 4.2 + (unit - 100) * 6;
// } else if (unit > 200 && unit <= 400) {
//   price = 100 * 4.2 + 100 * 6 + (unit - 200) * 8;
// } else if (unit > 400) {
//   price = 100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13;
// }

//  second and best approach

if (unit > 400) {
  price = (unit - 400) * 13; // 12350
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  price += (unit - 200) * 8; // 1600
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  price += (unit - 100) * 6; // 600
  unit = 100;
}

price += unit * 4.2;

console.log("Price of Elcetricity Bill : = " + price);
