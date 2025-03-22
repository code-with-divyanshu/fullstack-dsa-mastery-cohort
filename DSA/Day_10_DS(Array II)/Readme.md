# **Day 10 - Arrays (Sorting & Two-Pointer Approach)**

Today's session focused on **sorting techniques and two-pointer approaches** to efficiently solve array-related problems. I also implemented my own solutions alongside the class-taught methods.

---

## **📌 Summary**

✅ **Second Maximum & Minimum Element in an Array**  
✅ **Reversing an Array (With & Without Extra Space)**  
✅ **Moving Zeroes to Left & Ones to Right**  
✅ **Array Left & Right Rotation by 1**

---

## **📂 Questions and Explanations**

### **1️⃣ Find the Second Maximum Element in an Array**

📌 **Concept:** Iterate through the array, updating the first and second maximum values.  
✅ **Example:** `[28, 6, 75, 48, 84, 79, 84] → Second Max = 79`

🔹 **Class-Taught Approach:**

```js
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
```

🔹 **My Approach:**

```js
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
```

---

### **2️⃣ Reverse an Array**

📌 **Concept:** Swap elements from both ends using a **two-pointer approach** or create a new array.  
✅ **Example:** `[1, 2, 3, 4, 5, 6] → [6, 5, 4, 3, 2, 1]`

🔹 **Using Extra Space (My Approach):**

```js
let arr2 = [1, 2, 3, 4, 5, 6];
let reverseArr = [];
for (let i = arr2.length - 1; i >= 0; i--) {
  reverseArr.push(arr2[i]);
}
console.log(reverseArr);
```

🔹 **Without Extra Space (Two-Pointer Approach):**

```js
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
```

---

### **3️⃣ Move Zeroes to Left and Ones to Right**

📌 **Concept:** Use **two pointers** to push zeroes to the left and ones to the right.  
✅ **Example:** `[1, 1, 0, 1, 1, 0, 0, 1] → [0, 0, 0, 1, 1, 1, 1, 1]`

🔹 **Class-Taught Approach:**

```js
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
```

🔹 **My Approach:**

```js
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === 0) {
    let temp = arr3[i];
    arr3[i] = arr3[pointer2];
    arr3[pointer2] = temp;
    pointer2++;
  }
}
```

---

### **4️⃣ Array Left Rotation by 1**

📌 **Concept:** Shift all elements to the left, placing the first element at the end.  
✅ **Example:** `[1, 2, 3, 4, 5] → [2, 3, 4, 5, 1]`

```js
let arr4 = [1, 2, 3, 4, 5];
let tempVal = arr4[0];

for (let i = 0; i < arr4.length - 1; i++) {
  arr4[i] = arr4[i + 1];
}
arr4[arr4.length - 1] = tempVal;
console.log(arr4);
```

---

### **5️⃣ Array Right Rotation by 1**

📌 **Concept:** Shift all elements to the right, placing the last element at the front.  
✅ **Example:** `[1, 2, 3, 4, 5] → [5, 1, 2, 3, 4]`

```js
let arr5 = [1, 2, 3, 4, 5];
let tempVal2 = arr5[arr5.length - 1];

for (let i = arr5.length - 1; i > 0; i--) {
  arr5[i] = arr5[i - 1];
}
arr5[0] = tempVal2;
console.log(arr5);
```

---

### **6️⃣ Find the Second Minimum Element in an Array**

📌 **Concept:** Track the **minimum and second minimum** values while traversing.  
✅ **Example:** `[28, 6, 75, 48, 84, 79, 84] → Second Min = 28`

🔹 **My Approach:**

```js
let firstMin = Infinity;
let secondMin = Infinity;

for (let val of arr) {
  if (firstMin > val) {
    secondMin = firstMin;
    firstMin = val;
  } else if (val < secondMin && val !== firstMin) {
    secondMin = val;
  }
}
console.log(`SecondMin of arr is ${secondMin}`);
```

---

## **🚀 What I Learned?**

🔹 **Two-pointer approach** for efficient array traversal  
🔹 **Sorting-based techniques** for **finding max/min elements**  
🔹 **Array rotations** and **in-place modifications**  
🔹 **Multiple approaches** to the same problem

Looking forward to **more advanced array operations and searching techniques!** 🚀

---

Let me know if you need any modifications! ✅🔥
