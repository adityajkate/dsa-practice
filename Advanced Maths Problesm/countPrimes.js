// Count number of primes till that number, the issue is without using the normal iteration.
// This Question solved using Seive of eratosthenes!

let n = 30;

function sieve(n) {
  let arr = new Array(n + 1).fill(true);
  arr[0] = arr[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i]) process.stdout.write(i + " ");
  }
}

sieve(n);
