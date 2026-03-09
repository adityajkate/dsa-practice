// Print all factors of a Number

// Method 1 -> O(n)
let n = 10;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    console.log(i);
  }
}

// Method 2 -> O(n)
let n = 10;
for (let i = 1; i <= n / 2; i++) {
  if (n % i == 0) {
    console.log(i);
  }
}

// Method 3 --> Optimal O(sqrt(n))
for (let i = 1; i <= Math.sqrt(n); i++) {
  if (n % i == 0) {
    console.log(i);
  }
}
