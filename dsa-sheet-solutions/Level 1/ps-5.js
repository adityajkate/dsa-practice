// Write a JavaScript program to check whether a given integer is an Armstrong number

let n = 9484;
let copyN = n;
let numberLen = String(n).length;
let armstrongNumber = 0;

while (copyN > 0) {
  let x = copyN % 10;
  armstrongNumber += Math.pow(x, numberLen);
  copyN = Math.floor(copyN / 10);
}

if (armstrongNumber === n) {
  console.log("Armstrong Number!");
} else {
  console.log("Not a Armstrong Number!");
}
