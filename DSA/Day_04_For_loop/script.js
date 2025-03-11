// Day-4 Loops

// Q1. Accept an integer and Print hello world n times

let n = Number(prompt("Enter a number"));

if (isNaN(n)) {
  console.log("Invalid Input");
} else {
  for (let i = 1; i <= n; i++) {
    console.log("Hello World");
  }
}

// Q2. Print natural number up to n.

let nb = Number(prompt("Enter a number"));

for (let i = 1; i <= nb; i++) {
  console.log(i);
}

// Q3. Reverse for loop. Print n to 1.

let n1 = Number(prompt("Enter a number"));

for (let i = n1; i >= 1; i--) {
  console.log(i);
}

// Q4. Take a number as input and print its table

let num = Number(prompt("Enter a number"));

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// Q5. Sum up to n terms.

let n2 = Number(prompt("Enter a number"));
let sum = 0;

for (let i = 0; i <= n2; i++) {
  sum += i;
}

console.log(sum);

// Q6. Factorial of a  n numbers

let n3 = Number(prompt("Enter a number"));
let fact = 1;

for (let i = 1; i <= n3; i++) {
  fact *= i;
}

console.log(fact);

// Q7. Print the sum of all even & odd numbers in a range seperately.

let n4 = Number(prompt("Enter a number"));

let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= n4; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log("Even Sum " + evenSum);
console.log("Odd Sum " + oddSum);

// Q8.  Print all the factors of a number.

let n5 = Number(prompt("Enter a number"));

for (let i = 1; i <= n5 / 2; i++) {
  if (n5 % i === 0) {
    console.log(i);
  }
}
console.log(n5);

// Q9. Check if the number is Prime or not.

let num1 = Number(prompt("Enter your Number"));
// let isPrime = true;

// for (let i = 2; i < num1 / 2; i++) {
//   if (num1 % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// console.log(isPrime ? "Prime Number" : "Not Prime");

//  efficient algorithm -> time complexity = O.sqrt.n

isPrime = isPrimeFun(num1);
console.log(isPrime ? "Prime Number" : "Not Prime");

function isPrimeFun(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Q10. Write a program to take two inputs a, b & find the value of a  raised to the power of b.

let nb1 = Number(prompt("Enter your Number"));
let nb2 = Number(prompt("Enter your Number"));

// first and simple approach

// let ans = Math.pow(nb1, nb2);
// console.log(ans);

// effective approach

let pow = 1;

for (let i = 0; i < Math.abs(nb2); i++) {
  pow *= nb1;
}

if (nb2 < 0) {
  console.log(1 / pow);
}

console.log(pow);
