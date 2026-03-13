// Leetcode Link : https://leetcode.com/problems/flipping-an-image/
let matrix = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

let rows = matrix.length;
let col = matrix[0].length;

for (let i = 0; i < rows; i++) {
  let j = col - 1;
  let k = 0;
  while (j > k) {
    let temp = matrix[i][j];
    matrix[i][j] = matrix[i][k];
    matrix[i][k] = temp;
    k++;
    j--;
  }
}

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < col; j++) {
    matrix[i][j] === 1 ? (matrix[i][j] = 0) : (matrix[i][j] = 1);
  }
}

console.log(matrix);
