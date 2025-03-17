// Q1. ISBN Number

function isIsbn(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += (i + 1) * n[i];
  }

  if (sum % 11 === 0) {
    console.log(`${n} is a valid ISBN`);
  } else {
    console.log(`${n} is not a valid ISBN`);
  }
}

isIsbn("020131452"); // is not a valid ISBN
isIsbn("0471958697"); // is  a valid ISBN

// Q2. HCF/GCD

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(12, 18)); // 6
console.log(gcd(12, 20)); // 4

// Q3. Harshad Number

let isHarshadNumber = (n) => {
  let num = n;
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  if (n % sum === 0) {
    console.log(`${n} is a Harshad Number`);
  } else {
    console.log(`${n} is not a Harshad Number`);
  }
};

isHarshadNumber(18); // is a Harshad Number
isHarshadNumber(33); // is not a Harshad Number

// Q4. Perfect Square

let isPerfectSqurare = (n) => {
  let num = Math.sqrt(n);
  if (Number.isInteger(num)) {
    console.log(`${n} is a Perfect Square`);
  } else {
    console.log(`${n} is not a Perfect Square`);
  }
};

isPerfectSqurare(25); // is a Perfect Square
isPerfectSqurare(75); // is not a Perfect Square

// Q5.Abundant Number

let isAbundantNumber = (num) => {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  if (sum > num) {
    console.log(`${num} is a Abundant Number`);
  } else {
    console.log(`${num} is not a Abundant Number`);
  }
};

isAbundantNumber(12); // is a Abundant Number
isAbundantNumber(9); //is not a Abundant Number

// Q6. Fibonacci Series using Loop

let fibonacciSeries = (num) => {
  let a = 0,
    b = 1;
  let c;

  if (num >= 1) {
    console.log(a);
  }
  if (num >= 2) {
    console.log(b);
  }

  for (let i = 3; i <= num; i++) {
    c = a + b;
    console.log(c);
    [a, b] = [b, c];
  }
};

fibonacciSeries(6); // 0, 1, 1, 2, 3, 5

// Q7. Find Numbers with Exactly X Divisors

let exactXDivisor = (x) => {
  let divisor = "";
  for (let i = 1; i < 100; i++) {
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === x) {
      divisor += i + " ";
    }
  }
  console.log(divisor);
};

exactXDivisor(3); // 4, 9, 25, 49

// Q8. Prime Factors

let primefactor = (x) => {
  let prmfact = "";
  for (let i = 1; i < 100; i++) {
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      if (x % i === 0) {
        prmfact += i + " ";
      }
    }
  }
  console.log(prmfact);
};

primefactor(30); // 2, 3, 5

// 9. Calculate Area using Switch Statement

function getArea(choice, radius, length, breath, side1, side2, side3) {
  let area = 0;
  switch (choice) {
    case "circle":
      area = Math.PI * radius * radius;
      console.log(`Area of ${choice} is ${area.toFixed(1)}`);
      break;

    case "rectangle":
      area = length * breath;
      console.log(`Area of ${choice} is ${area.toFixed(1)}`);
      break;

    case "triangle":
      let s = Math.floor((side1 + side2 + side3) / 2);
      area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
      console.log(`side1rea of ${choice} is ${area.toFixed(1)}`);
      break;

    default:
      console.log("Please provide valid choice");
      break;
  }
}

getArea("circle", 5); // Area of circle is 78.5

// Q10. Neon Number

let isNeonNumber = (num) => {
  let sq = num * num;
  let sum = 0;
  while (sq > 0) {
    sum += sq % 10;
    sq = Math.floor(sq / 10);
  }

  if (sum === num) {
    console.log(`${num} is a Neon Number`);
  } else {
    console.log(`${num} is not a Neon Number`);
  }
};

isNeonNumber(9); // 9 is a Neon Number

// 11. Sum of Even Indexed Fibonacci Numbers

let sumOfEvenIndexFibonacciNumber = (num) => {
  let sum = 0;

  let a = 0,
    b = 1;

  for (let i = 0; i < num * 2; i++) {
    let c = a + b;
    [a, b] = [b, c];
    if (i % 2 === 0) {
      sum += c;
    }
  }
  console.log(sum);
};

sumOfEvenIndexFibonacciNumber(4); // 33

// 12. Find the Largest Digit in a Number

let largestDigitInNumber = (digit) => {
  let largestDigit = 0;
  while (digit > 0) {
    let rem = digit % 10;
    if (largestDigit < rem) {
      largestDigit = rem;
    } else {
      largestDigit = largestDigit;
    }
    digit = Math.floor(digit / 10);
  }
  console.log(largestDigit);
};

largestDigitInNumber(54839); // 9

// 13. Find LCM of Two Numbers

let lcm = (a, b) => {
  console.log((a * b) / gcd(a, b));
};

lcm(12, 15); // 60

// 14. Find the Sum of Even Digits in a Number

let sumOfEvenDigitNumber = (digit) => {
  let sum = 0;
  while (digit > 0) {
    let rem = digit % 10;
    if (rem % 2 === 0) {
      sum += rem;
    }
    digit = Math.floor(digit / 10);
  }
  console.log(sum);
};

sumOfEvenDigitNumber(2384); // 14

// Q15. Number of Days in a Month

function numberOfDays(month, year) {
  if (month < 1 || month > 12) {
    console.log("Please Provide Valid Month");
  }

  if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(`The Month have a 29 Days`);
    } else {
      console.log(`The Month have a 28 Days`);
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(`The Month have a 30 Days`);
  } else {
    console.log(`The Month have a 31 Days`);
  }
}

numberOfDays(2, 2024); //"The Month has 29 days
numberOfDays(10, 2013); //"The Month has 31 days
