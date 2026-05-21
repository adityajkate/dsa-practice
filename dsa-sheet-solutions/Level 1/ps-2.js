// Write a JavaScript program to reverse a given integer.
let prompt = require("prompt-sync")();

let n = +prompt("Enter a number: ");
let str = "";
while (n > 0) {
  let x = n % 10;
  str += Number(x);
  n = Math.floor(n / 10);
}

console.log(str, typeof str);
