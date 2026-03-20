// Print Number n to 1 using Recursion

let n = 17;
function temp(n) {
  if (n == 0) return;
  process.stdout.write(n + " ");
  temp(n - 1);
}
temp(n);
