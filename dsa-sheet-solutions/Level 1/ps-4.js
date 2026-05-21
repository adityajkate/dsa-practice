// Write a JavaScript program to find the Greatest Common Divisor (GCD) or Highest CommonFactor (HCF) of two given numbers.

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (a == 0 && b == 0) {
    console.log("Undefined/invalid");
    return;
  }

  while (a > 0) {
    let temp = a;
    a = b % a;
    b = temp;
  }
  console.log(b);
}

gcd(10, 5); // 5
gcd(12, 18); // 6
gcd(7, 13); // 1
gcd(100, 25); // 25
gcd(81, 27); // 27
gcd(14, 21); // 7
gcd(17, 17); // 17
gcd(270, 192); // 6

gcd(1, 1); // 1
gcd(1, 99); // 1

gcd(0, 5); // 5
gcd(5, 0); // 5
gcd(0, 0); // invalid / undefined

gcd(-12, 18); // 6
gcd(-24, -36); // 12

gcd(123456, 7890); // 6
gcd(48, 180); // 12
gcd(37, 600); // 1
