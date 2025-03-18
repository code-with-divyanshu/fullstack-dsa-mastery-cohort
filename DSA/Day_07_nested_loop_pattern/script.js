// Nested Looping & Pattern Programming
const prompt = require("prompt-sync")();
// Nested loop

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// Q1. Right angle triangle

let n = prompt("Enter a number");

//  first approach
for (let i = 1; i <= n; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "* ";
  }
  console.log(star);
}

// second approach
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// Q2. Right angle triangle - Number Pattern

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + "");
  }
  console.log();
}

// Q3. Inverted Right Angle Triangle

// first approach
let temp = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= temp; j++) {
    process.stdout.write("* ");
  }
  temp--;
  console.log();
}

// second approach
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// Give as a assignement

// Q5. Right angle triangle - Alphabet Pattern

for (let i = 1; i <= n; i++) {
  let charCode = 65;
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += String.fromCharCode(charCode++) + " ";
  }
  console.log(pattern);
}
