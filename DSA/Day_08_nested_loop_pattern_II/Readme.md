# **Day 8 - Advanced Pattern Printing**

This repository contains JavaScript solutions for **pattern programming**, covering **mirror triangles, equilateral triangles, X-shapes, and V-shapes** using nested loops.

---

## **📌 Summary**

In today's class, I explored **complex pattern printing** using **nested loops and conditional logic**. This session helped improve:

✅ **Loop Control:** Using `for` loops efficiently for structured patterns  
✅ **Conditional Logic:** Creating precise spacing and alignments  
✅ **Different Approaches:** Implementing multiple solutions for the same problem

🔗 **GitHub Repo:** [Add your repo link here]

---

## **📂 Questions and Explanations**

### **1️⃣ Mirror Right-Angled Triangle (Star Pattern)**

Prints a right-angled triangle that is **mirrored along the vertical axis**.  
✅ **Example for `n = 5`:**

```
        *
      * *
    * * *
  * * * *
* * * * *
```

Implemented in **two ways**:  
🔹 **Class Method** (Using two loops for spaces & stars)  
🔹 **My Approach** (Using a single loop with conditions)

---

### **2️⃣ Equilateral Triangle (Pyramid Pattern)**

Prints a **pyramid-like triangle**, ensuring **centered alignment**.  
✅ **Example for `n = 5`:**

```
    *
   * *
  * * *
 * * * *
* * * * *
```

Both **class-taught and self-implemented** solutions are provided.

---

### **3️⃣ X-Shape Pattern**

Prints an **X-pattern**, where stars (`*`) appear in a diagonal crossing formation.  
✅ **Example for `n = 5`:**

```
*       *
  *   *
    *
  *   *
*       *
```

🔹 Used conditions `(i === j || i + j === n + 1)` to form diagonals.

---

### **4️⃣ V-Shape Pattern**

Prints a **V-shaped star pattern**, with stars positioned symmetrically.  
✅ **Example for `n = 5`:**

```
*       *
 *     *
  *   *
   * *
    *
```

### **4️⃣ V-Shape Pattern**

Prints a **Strong Number**.  
✅ **Example for `n = 145`:**

```js
let ans = 0;
let copy = n;
while (n > 0) {
  let rem = n % 10;
  let fact = 1;
  for (let i = 1; i <= rem; i++) {
    fact *= i;
  }
  ans += fact;
  n = Math.floor(n / 10);
}

console.log(copy === ans ? "Strong Number" : "No Strong Number");
```

---

## **🚀 What I Learned?**

🔹 How to **combine loops & conditionals** for **structured patterns**  
🔹 How **spaces & star placements** impact alignment  
🔹 The importance of **multiple approaches** for the same problem

Looking forward to tackling **more complex patterns & algorithmic challenges!** 🚀

---
