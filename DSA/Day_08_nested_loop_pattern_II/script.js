//  Pattern Printing
const prompt = require("prompt-sync")();

let n = +prompt("Enter your number");

// Q1. Print an Mirror right angle triangle  pattern

//  in class
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// By me (my apparoach)

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j <= n - i) {
      process.stdout.write("  ");
    } else {
      process.stdout.write("* ");
    }
  }
  console.log();
}

// Q2. Print an equilateral triangle pattern

//  in class
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// By me (my apparoach)

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j <= n - i) {
      process.stdout.write(" ");
    } else {
      process.stdout.write("* ");
    }
  }
  console.log();
}

// Q3. Print an x-shape pattern

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j || i + j === n + 1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}

// Q4. Print an V-shape pattern

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2 * n - 1; j++) {
    if (i === j || i + j === 2 * n) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}

// Q5. Strong Number

let ans = 0;
let copy = n;
while (n > 0) {
  let rem = n % 10;
  let fact = 1;
  for (let i = 1; i <= rem; i++) {
    fact *= i;
  }
  ans += fact;
  n = Math.floor(n / 10);
}

console.log(copy === ans ? "Strong Number" : "No Strong Number");
