// Efficient Approach to solve two sum problem.
// 1st Approach - Brute force, using i and j pointer but the Time complexity is O(n^2)!
// Leetcode link : https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let map = new Map();
  let ans = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      ans[0] = i;
      ans[1] = map.get(target - nums[i]);
    } else {
      map.set(nums[i], i);
    }
  }
  return ans;
};
