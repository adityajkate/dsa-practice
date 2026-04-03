// Leetcode : https://leetcode.com/problems/missing-number/
function missingNumber(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] != i) {
      return i;
    }
  }
}

// Optimal Solution
function missingNumberOptimal(arr) {
  let n = arr.length;
  let sum = 0;
  let totalSum = (n * (n + 1)) / 2;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return totalSum - sum;
}
