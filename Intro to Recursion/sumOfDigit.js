// let n = 123;
// let sum = 0;

// while (n > 0) {
//   let num = n % 10;
//   sum += num;
//   n = Math.floor(n / 10);
// }

// console.log(sum);

function sumOfDigits(n) {
  // base case
  if (n === 0) return 0;

  // recursive case
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// example
let n = 123;
console.log(sumOfDigits(n)); // 6
