# **Day 11 - Array Rotation & Searching Algorithms**

## **📌 Topics Covered**

- 🔄 **Array Left Rotation by K Elements** (Brute Force, Temporary Array, Two-Pointer)
- 🔍 **Linear Search**
- 🔢 **Binary Search**

---

## **✅ Summary**

✔️ **Array Rotation:** 3 Approaches  
✔️ **Searching Algorithms:** Linear & Binary Search  
✔️ **Binary Search is efficient (O(log N)) compared to Linear Search (O(N))**

---

## **📂 Problems & Solutions**

### **Q1. Array Left Rotation by K Elements**

**Problem Statement:** Given an array and an integer `k`, rotate the array left by `k` elements.

### **📌 Approach 1: Brute Force (Nested Loop)**

- Rotate the array **one element at a time** for `k` times.
- Each time, move the first element to the last position.

```js
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
```

### **📌 Approach 2: Using a Temporary Array**

- Store rotated elements in a **new array** using the formula:  
  `tempArr[i] = arr[(i + k) % arr.length]`

```js
let arr2 = [1, 2, 3, 4, 5];
let tempArr = [];

for (let i = 0; i < arr2.length; i++) {
  tempArr[i] = arr2[(i + k) % arr2.length];
}
console.log(tempArr); // [3, 4, 5, 1, 2]
```

### **📌 Approach 3: Using Two-Pointer & Reverse Method**

- Reverse the first `k` elements.
- Reverse the remaining elements.
- Reverse the whole array.

```js
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
console.log(arr3); // [3, 4, 5, 1, 2]
```

---

## **Q2. Linear Search**

**Problem Statement:** Given an array and a `target` value, find its index using **Linear Search**.

### **📌 Approach**

- Iterate over the array and compare each element with `target`.
- Return the index if found, otherwise return `"Element not Found"`.

```js
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
```

---

## **Q3. Binary Search**

**Problem Statement:** Given a **sorted array**, find a `target` value using **Binary Search**.

### **📌 Approach**

- Find the **middle element**.
- If `target` is greater, search in the **right half**.
- If `target` is smaller, search in the **left half**.
- Repeat until the `target` is found.

```js
let arr5 = [10, 25, 32, 43, 65, 73, 190, 323];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

if (binarySearch(arr5, 10) === -1) {
  console.log("Element not Found");
} else {
  console.log("Element found");
}
```

---
