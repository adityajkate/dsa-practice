// Write a program to print a factorial of a number
function temp(m) {
  if (m == 1) return m;
  return m * temp(m - 1);
}

console.log(temp(5));
