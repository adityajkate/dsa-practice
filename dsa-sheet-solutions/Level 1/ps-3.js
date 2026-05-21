// Write a JavaScript program to check whether a given integer is a palindrome.
let prompt = require("prompt-sync")();

let n = +prompt("Enter a number: ");

if (n < 0) {
  console.log("The number is not palindrome!");
} else {
  let originalNumber = n;
  let reversedNumber = 0;

  while (n > 0) {
    reversedNumber = reversedNumber * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  if (originalNumber === reversedNumber) {
    console.log("The number is palindrome!");
  } else {
    console.log("The number is not palindrome!");
  }
}
