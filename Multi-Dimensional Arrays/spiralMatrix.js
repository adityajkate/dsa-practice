/*
    Spiral Matrix
    Link ~ https://leetcode.com/problems/spiral-matrix/description/
*/

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let rows = matrix.length;
let cols = matrix[0].length;

let res = [];

let top = 0;
let bottom = rows - 1;
let left = 0;
let right = cols - 1;

while (res.length !== rows * cols) {
  for (let i = left; i <= right && res.length < rows * cols; i++) {
    res.push(matrix[top][i]);
  }
  top++;

  for (let i = top; i <= bottom && res.length < rows * cols; i++) {
    res.push(matrix[i][right]);
  }
  right--;

  for (let i = right; i >= left && res.length < rows * cols; i--) {
    res.push(matrix[bottom][i]);
  }
  bottom--;

  for (let i = bottom; i >= top && res.length < rows * cols; i--) {
    res.push(matrix[i][left]);
  }
  left++;
}

console.log(res);
