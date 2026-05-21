// Write a Java program to print all divisors of a given integer

let n = 17;
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    process.stdout.write(i + " ");
  }
}
