function temp(n) {
  if (n == 1) return n;
  return n + temp(n - 1);
}

console.log(temp(5));
