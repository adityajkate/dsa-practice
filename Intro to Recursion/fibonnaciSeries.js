// Iterative method : 0 1 2 3 5 8 13 21 ..

/*
let first = 0;
let second = 1;
let n = 10;
process.stdout.write(first + " " + second + " ");
for (let i = 1; i <= n - 2; i++) {
  let third = first + second;
  process.stdout.write(third + " ");
  first = second;
  second = third;
}
*/

// Recursive Method

/*
function fibo(n, first, second) {
  if (n === 0) return;
  let third = first + second;
  process.stdout.write(third + " ");
  fibo(n - 1, second, third);
}

let n = 10;
let first = 0,
  second = 1;

process.stdout.write(first + " " + second + " ");
fibo(n - 2, first, second);
*/

// let say user wants sum till n fibo terms :
/*
let n = 10;
function fibo(n) {
  if (n == 1 || n == 0) return n;
  return fibo(n - 1) + fibo(n - 2);
}
console.log("The sum of fibo is ", fibo(n));
*/
