/*
Transpose of a matrix;
matrix = [[1,2,3], [4,5,6], [7,8,9]]
transpose_matrix = [[1,4,7],[2,5,8],[3,4,6]]
*/

/*
    Leetcode Link : https://leetcode.com/problems/transpose-matrix/description/
*/

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let transpose_matrix = new Array(matrix[0].length);
for (let i = 0; i < transpose_matrix.length; i++) {
  transpose_matrix[i] = new Array(matrix.length);
}

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    transpose_matrix[i][j] = matrix[j][i];
  }
}

console.log(transpose_matrix);
