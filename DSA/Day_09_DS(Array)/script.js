// arr2 - linear data structure hold(store)  multiple variables (diff data types) in a continous memory locations

const prompt = require("prompt-sync")();
let size = Array(prompt("Enter your number"));

// Questions

// Q1. Sum of an Array Element

let sum = 0;
let arr = new Array(size);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Enter your element"));
  sum += arr[i];
}
console.log("Sum of arr Element = " + sum);

// Q2. Find the greatest element in Array

let arr2 = [10, 5, 15, 8, 3, 46, 19, 100];
let maxElement = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > maxElement) {
    maxElement = arr2[i];
  }
}
console.log(maxElement); // 100

let seconMaxElement = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > seconMaxElement) {
    seconMaxElement = arr2[i];
  }
}
console.log(seconMaxElement); // 100
