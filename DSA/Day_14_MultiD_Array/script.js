// Multidimensional  Array
let prompt = require("prompt-sync")();
// 2D Array

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    process.stdout.write(`${arr[i][j]} `);
  }
  console.log();
}

// Multidimensional 2D Array Dynamic

// let size = Number(prompt("Enter a size of arr"));
// let arr2 = new Array(size);
// for (let i = 0; i < arr2.length; i++) {
//   arr2[i] = new Array(4);
// }

// for (let i = 0; i < arr2.length; i++) {
//   for (let j = 0; j < arr2[i].length; j++) {
//     arr2[i][j] = Number(prompt("Enter a element"));
//   }
// }

// console.log(arr2);

// // 3D Array

// let arr3 = [
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//   ],
//   [
//     [7, 8, 9],
//     [10, 11, 12],
//   ],
//   [
//     [13, 14, 15],
//     [16, 17, 18],
//   ],
// ];

//

let arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let leftSum = 0,
  rightSum = 0;
for (let i = 0; i < arr4.length; i++) {
  for (let j = 0; j < arr4[i].length; j++) {
    if (i === j) {
      leftSum += arr[i][j];
    }
    if (i + j == arr4.length - 1) {
      rightSum += arr[i][j];
    }
  }
}

console.log(leftSum);
console.log(rightSum);

// zacked Array

let arr5 = new Array(4);
for (let i = 0; i < arr5.length; i++) {
  let size = Number(prompt("Enter a inner size of arr"));
  arr5[i] = new Array(size);
}

for (let i = 0; i < arr5.length; i++) {
  for (let j = 0; j < arr5[i].length; j++) {
    arr5[i][j] = Number(prompt("Enter a element"));
  }
}

console.log(arr5);

//

let array = Array.from({ length: 3 }, () => Array(4).fill(0));
console.log(array);
