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
