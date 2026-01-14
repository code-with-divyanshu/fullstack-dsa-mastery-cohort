// Q1. Transpose Matrix

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var transpose = function (matrix) {
  //** first approach */

  //   let newArr = Array.from({ length: matrix[0].length }, () =>
  //     Array(matrix.length)
  //   );
  //   for (let i = 0; i < newArr.length; i++) {
  //     for (let j = 0; j < newArr[i].length; j++) {
  //       newArr[i][j] = matrix[j][i];
  //     }
  //   }
  //   return newArr;

  //** second approach */

  let row = matrix.length;
  let col = matrix[0].length;
  let newArr = new Array(col);
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = new Array(row);
  }

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      newArr[i][j] = matrix[j][i];
    }
  }
  return newArr;
};

console.log(transpose(matrix));

// Q2. Rotate Image

var rotate = function (matrix) {
  // transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // reverse every row
  for (let i = 0; i < matrix.length; i++) {
    let k = 0,
      j = matrix[i].length - 1;
    while (k < j) {
      let temp = matrix[i][k];
      matrix[i][k] = matrix[i][j];
      matrix[i][j] = temp;
      k++;
      j--;
    }
  }

  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// Q3. Spiral Matrix

function spiral(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  total = row * col;

  while (matrix.length < total) {}
}
