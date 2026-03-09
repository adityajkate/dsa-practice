/*
Formula => CP = A - P
              = P * (1 + r/100) ^ t - P
*/

let A = 1000; // Amount
let P = 40; // Principle
let r = 3; // Rate of Interest

let CI = P * Math.pow(1 + r / 100, t) - P;
console.log(CI);
