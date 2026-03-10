let prompt = require("prompt-sync")();
let size = +prompt("Enter size of Array: ");
let innerSize = +prompt("Enter Inner size of Array: ");
let arr = new Array(size);

// nested array condition
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(innerSize);
}

// dynamic elements enter condition
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = +prompt("Enter element : ");
  }
}

// print array
console.log(arr);
