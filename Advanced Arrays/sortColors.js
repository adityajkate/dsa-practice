// Leetcode : https://leetcode.com/problems/sort-colors/
var sortColors = function (nums) {
  let i = 0,
    j = 0,
    k = nums.length - 1;
  while (i <= k) {
    if (nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i = i + 1;
      j = j + 1;
    } else if (nums[i] === 2) {
      let temp = nums[i];
      nums[i] = nums[k];
      nums[k] = temp;
      k = k - 1;
    } else {
      i = i + 1;
    }
  }
};
