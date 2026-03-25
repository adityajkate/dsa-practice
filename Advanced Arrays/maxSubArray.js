// Leetcode link : https://leetcode.com/problems/maximum-subarray/
var maxSubArray = function (nums) {
  // Kadane's Algorith approach (optimal)
  let sum = 0;
  let maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};
