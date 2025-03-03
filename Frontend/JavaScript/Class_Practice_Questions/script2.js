// // Day-04 Practice Question

// // Topic 5  - Callback , Higher Order Function and Closure

// // Q 21. Create a function give them another function as argument which run after 3 second

function callerFun(fn) {
  setTimeout(fn, 3000);
}

callerFun(() => console.log("Hey")); // log Hey after 3 second

// Q 22. Create your own function like map

let arr = [1, 2, 3, 4, 5, 6];

function hap(a, fn) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    newArr.push(fn(a[i]));
  }
  return newArr;
}

let ans = hap(arr, function (val) {
  return val + 3;
});

console.log(ans); // [4, 5, 6, 7, 8, 9]

// Q 23. Create a function that uses closures to create a counter

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let useCounter = counter();
useCounter(); // 1
useCounter(); // 2
useCounter(); // 3

// Q 24. implement function that have limit function can call

function fnlimiter(fn, limit) {
  let totalcalled = 0;
  return function () {
    if (totalcalled < limit) {
      totalcalled++;
      fn();
    } else {
      console.error("Limit reached");
    }
  };
}

let limiter = fnlimiter(function () {
  console.log("hey");
}, 3);
limiter();
limiter();
limiter();
limiter(); // limit reached here
