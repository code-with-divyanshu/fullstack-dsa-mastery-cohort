// Array Day-02 (Sorting) using two pointer

// Q1. Second Max Element form array

let arr = [28, 6, 75, 48, 84, 79, 84];

let maxElement = Math.max(arr[0], arr[1]);
let secondMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (maxElement < arr[i]) {
    secondMax = maxElement;
    maxElement = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== maxElement) {
    secondMax = arr[i];
  }
}
console.log(`SecondMax of arr is ${secondMax}`);

// Second Approaach , by me

let firstMax = -Infinity;
let sMax = -Infinity;

for (const val of arr) {
  if (firstMax < val) {
    sMax = firstMax;
    firstMax = val;
  } else if (val > sMax && val !== firstMax) {
    sMax = val;
  }
}

console.log(`SecondMax of arr is ${sMax}`);

// Q2. Reverse the arr (done by me using extra space)

let arr2 = [1, 2, 3, 4, 5, 6];
let reverseArr = [];
for (let i = arr2.length - 1; i >= 0; i--) {
  reverseArr.push(arr2[i]);
}

console.log(reverseArr);

// second approach

let temp = new Array(arr2.length);
let index = 0;

for (let j = arr2.length - 1; j >= 0; j--) {
  temp[index] = arr2[j];
  index++;
}

console.log(temp);

// method 2 - without using extra space

let point1 = 0;
let point2 = arr2.length - 1;
while (point1 < point2) {
  let temp = arr2[point1];
  arr2[point1] = arr2[point2];
  arr2[point2] = temp;
  point1++;
  point2--;
}

console.log(arr2);

// Q3. All zeroes to left and all ones to right

let arr3 = [1, 1, 0, 1, 1, 0, 0, 1];
let pointer1 = 0;
let pointer2 = 0;
while (pointer1 < arr3.length) {
  if (arr3[pointer1] === 0) {
    let temp = arr3[pointer1];
    arr3[pointer1] = arr3[pointer2];
    arr3[pointer2] = temp;
    pointer2++;
  }
  pointer1++;
}
console.log(arr3);

// my approach

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === 0) {
    let temp = arr3[i];
    arr3[i] = arr3[pointer2];
    arr3[pointer2] = temp;
    pointer2++;
  }
}

// Q4. Array left rotation by 1

let arr4 = [1, 2, 3, 4, 5];
let tempVal = arr4[0];

for (let i = 0; i < arr4.length - 1; i++) {
  arr4[i] = arr4[i + 1];
}
arr4[arr4.length - 1] = tempVal;

console.log(arr4);

// Q5. Array right rotation by 1

let arr5 = [1, 2, 3, 4, 5];
let tempVal2 = arr5[arr5.length - 1];

for (let i = arr5.length - 1; i > 0; i--) {
  arr5[i] = arr5[i - 1];
}
arr5[0] = tempVal2;

console.log(arr5);

// find second min from array (done by me)

let firstmMin = Infinity;
let secondMin = Infinity;

for (let val of arr) {
  if (firstmMin > val) {
    secondMin = firstmMin;
    firstmMin = val;
  } else if (val < secondMin && val !== firstmMin) {
    secondMin = val;
  }
}

console.log(`SecondMin of arr is ${secondMin}`);
