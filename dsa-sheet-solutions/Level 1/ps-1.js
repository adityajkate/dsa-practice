// Write a JavaScript program to count the number of digits in a given integer.
let prompt = require("prompt-sync")();
let n = +prompt("Enter a number to count the digits: ");
let number = String(Math.abs(n));
console.log("The Digit of the numbers are : ", number.length);
