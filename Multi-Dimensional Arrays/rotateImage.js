/*
    Rotate Matrix :
    1 2 3           7 4 1
    4 5 6    ~>     8 5 2
    7 8 9           9 6 3

    Condition : No Creation of extra space, no return, but i am simply printing!
    link : https://leetcode.com/problems/rotate-image/description/
*/

// Rotate Matrix
for (let i = 0; i < matrix.length; i++) {
  for (let j = i; j < matrix[i].length; j++) {
    let temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
  }
}

// Rotate Transposed ~ Matrix
for (let i = 0; i < matrix.length; i++) {
  let k = 0;
  let j = matrix[i].length - 1;
  while (k < j) {
    let temp = matrix[i][k];
    matrix[i][k] = matrix[i][j];
    matrix[i][j] = temp;
    k = k + 1;
    j = j - 1;
  }
}

console.log(matrix);
