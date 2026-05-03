// Leetcode : https://leetcode.com/problems/contiguous-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) nums[i] = -1;
  }
  let map = new Map();
  map.set(0, -1);
  let sum = 0,
    k = 0,
    longest = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      longest = Math.max(longest, i - map.get(sum - k));
    }
    if (!map.has(sum)) map.set(sum, i);
  }
  return longest;
};
