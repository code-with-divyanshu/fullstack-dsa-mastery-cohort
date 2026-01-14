// Q1. Array left rotation by k elements

// first approach (brute force)

let k = 2;
let arr = [1, 2, 3, 4, 5];
k = k % arr.length;

for (let j = 1; j <= k; j++) {
  let tempVal = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = tempVal;
}
console.log(arr); // [3, 4, 5, 1, 2];

// second approach (using one `loop` and  `temp()`array)
let arr2 = [1, 2, 3, 4, 5];
let tempArr = [];

for (let i = 0; i < arr2.length; i++) {
  tempArr[i] = arr2[(i + k) % arr2.length];
}
console.log(tempArr); // [ 3, 4, 5, 1, 2 ]

// second approach (using two pointer)

let arr3 = [1, 2, 3, 4, 5];
let k2 = 2;
k2 = k2 % arr3.length;
reverse(arr3, 0, k2 - 1);
reverse(arr3, k2, arr3.length - 1);
reverse(arr3, 0, arr3.length - 1);

function reverse(arr, i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}
console.log(arr3);

// linear search (find the targeted number)

let target = 40;
let arr4 = [10, 20, 40, 50, 55, 57];

let index = -1;
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] == target) {
    index = i;
    break;
  }
}

console.log(index == -1 ? "Element not Found" : "Element found at " + index);

// binary search (find the targeted number)
// * for binary search , array should be sorted

let arr5 = [10, 25, 32, 43, 65, 73, 190, 323];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (start > end) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

if (binarySearch(arr5, 10) === -1) {
  console.log("Element not Found");
} else {
  console.log("Element found");
}
