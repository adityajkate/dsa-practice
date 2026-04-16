//leetcode :

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    // While the current number is in our target range (1 to n)
    // AND it is not already sitting in its correct index...
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // Calculate the correct index for the current number
      const correctIdx = nums[i] - 1;

      // Swap the current number to its correct position.
      // Using a temporary variable here is the safest way to swap
      // array elements by index in JavaScript.
      const temp = nums[i];
      nums[i] = nums[correctIdx];
      nums[correctIdx] = temp;
    }
  }

  // Now that everything is as sorted as it can be, find the first mismatch
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // If all numbers from 1 to n are present, the answer is n + 1
  return n + 1;
};
