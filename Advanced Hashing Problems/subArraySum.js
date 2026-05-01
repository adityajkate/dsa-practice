/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const prefixSumCount = new Map();
  prefixSumCount.set(0, 1); // Base case: sum 0 occurs once before starting

  let currentSum = 0;
  let count = 0;

  for (const num of nums) {
    currentSum += num;

    // Check if there is a prefix sum such that currentSum - prefixSum = k
    // => prefixSum = currentSum - k
    if (prefixSumCount.has(currentSum - k)) {
      count += prefixSumCount.get(currentSum - k);
    }

    // Update the count of the current prefix sum
    prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);
  }

  return count;
};
