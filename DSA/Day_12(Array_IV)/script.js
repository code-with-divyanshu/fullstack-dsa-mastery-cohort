// (sort element of array)

// Bubble sort

let arr = [1, 4, 3, 2, 9, 10];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr); // [1, 2, 3, 4, 9, 10]

// Selection sort

let arr2 = [3, 5, 1, 9, 7];
for (let i = 0; i < arr2.length - 1; i++) {
  let small = i;
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[small] > arr2[j]) {
      small = j;
    }
  }

  if (i != small) {
    let temp = arr2[i];
    arr2[i] = arr2[small];
    arr2[small] = temp;
  }
}

console.log(arr2); // [1, 3, 5, 7, 9]

// Insertion sort

let arr3 = [1, 9, 5, 12, 76, 34];

for (let i = 1; i < arr3.length; i++) {
  let key = arr3[i];
  let j = i - 1;
  while (j >= 0 && arr3[j] > key) {
    arr3[j + 1] = arr3[j];
    j--;
  }
  arr3[j + 1] = key;
}

console.log(arr3);
