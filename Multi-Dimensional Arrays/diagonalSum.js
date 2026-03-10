let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Right Diagonal Sum => 1 + 5 + 9
// Left Diagonal Sum => 3 + 5 + 7

let rightDiagonalSum = 0;
let leftDiagonalSum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (i === j) {
      rightDiagonalSum += arr[i][j];
    }
    if (i + j === arr.length - 1) {
      leftDiagonalSum += arr[i][j];
    }
  }
}

console.log("Right Diagonal Sum : ", rightDiagonalSum);
console.log("Left Diagonal Sum: ", leftDiagonalSum);
