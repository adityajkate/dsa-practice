// Leetcode link : https://leetcode.com/problems/3sum/

var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // O(n log n)
  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicates for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);

        // skip duplicates for left
        while (left < right && nums[left] === nums[left + 1]) left++;
        // skip duplicates for right
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};
