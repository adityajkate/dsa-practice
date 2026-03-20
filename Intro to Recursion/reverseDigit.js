function ROD(n, rev = 0) {
  if (n === 0) return rev;
  return ROD(Math.floor(n / 10), rev * 10 + (n % 10));
}

console.log(ROD(1611, 0));
