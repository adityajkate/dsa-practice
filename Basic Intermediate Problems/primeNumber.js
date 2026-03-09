// Method 1
let n = 7;
let isPrime = true;
for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("Prime Number!");
} else {
  console.log("Not Prime Number !");
}

// Method 2
let n = 7;
let isPrime = true;
for (let i = 2; i < n / 2; i++) {
  if (n % i == 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("Prime Number!");
} else {
  console.log("Not Prime Number !");
}

// Method 3
let n = 7;
let isPrime = true;
for (let i = 2; i < Math.sqrt(n); i++) {
  if (n % i == 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("Prime Number!");
} else {
  console.log("Not Prime Number !");
}

// Method 4 - Best
function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i < Math.sqrt(n); i = i + 2) {
    if (n % i == 0) return false;
  }
}
