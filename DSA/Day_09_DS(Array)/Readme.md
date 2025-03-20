# **Day 9 - Introduction to Data Structures (Arrays)**

This session marks the beginning of **Data Structures** in JavaScript, starting with **Arrays**. Arrays are a **linear data structure** that store multiple variables **(of the same or different data types)** in **continuous memory locations**.

---

## **📌 Summary**

Today, I explored the **fundamentals of arrays**, including:

✅ **Array Declaration & Initialization**  
✅ **Looping through an array using `for` loops**  
✅ **Basic operations: Sum, Maximum Element**  
✅ **Solved additional questions:**

- **Second Largest Element in an Array**
- **Reverse an Array (Without using built-in functions)**

---

## **📂 Questions and Explanations**

### **1️⃣ Sum of Array Elements**

📌 **Concept:** Iterate over the array and sum all elements.  
✅ **Example:** `[1, 2, 3, 4, 5] → Sum = 15`

```js
let sum = 0;
let arr = new Array(size);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Enter your element"));
  sum += arr[i];
}
console.log("Sum of Array Elements = " + sum);
```

---

### **2️⃣ Find the Greatest Element in an Array**

📌 **Concept:** Compare each element with `maxElement` and update accordingly.  
✅ **Example:** `[10, 5, 15, 8, 3, 46, 19, 100] → Max = 100`

```js
let arr2 = [10, 5, 15, 8, 3, 46, 19, 100];
let maxElement = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > maxElement) {
    maxElement = arr2[i];
  }
}
console.log("Max Element: " + maxElement);
```

---

### **3️⃣ Additional Questions I Solved**

🔹 **Second Largest Element in an Array**  
🔹 **Reverse an Array (Without using built-in functions)**

These problems helped reinforce **sorting, traversal, and logic-building skills**.

---

## **🚀 What I Learned?**

🔹 How **arrays store and manipulate data** in memory  
🔹 How to **traverse and perform operations** using loops  
🔹 Importance of **conditions and comparisons** in array problems

Looking forward to diving **deeper into arrays & solving more complex problems!** 🚀

---
