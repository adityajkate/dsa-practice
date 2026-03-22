// Leetcode link : https://leetcode.com/problems/sqrtx/

var mySqrt = function (x) {
  let i = 1;
  while (i * i <= x) {
    if (i * i == x) return i;
    i = i + 1;
  }
  return i - 1;
};
