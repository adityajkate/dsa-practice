// Basic Approach
let a = 20,
  b = 16;
for (let i = Math.min(a, b); i >= 1; i--) {
  if (a % i === 0 && b % i === 0) {
    console.log("GCD : ", i);
    break;
  }
}

// using Euclidean Algo
a = 32;
b = 20;
while (a != b) {
  if (a > b) a = a - b;
  b = b - a;
}
console.log(a);

// using Recursion
function gcd(a, b) {
  if (a == b) return a;
  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
}

console.log(gcd(32, 20));

// Using Extended Euclidean Algo - BEST/Efficient - TC : O(log(Max(a,b)))
function ExtGCD(a, b) {
  a = Math.max(a, b);
  b = Math.min(a, b);
  if (b === 0) return a;
  return ExtGCD(b, a % b);
}
console.log(ExtGCD(10234, 989));
