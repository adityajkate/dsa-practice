// Leetcode link : https://leetcode.com/problems/first-missing-positive/

var firstMissingPositive = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let currentIdx = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] != nums[currentIdx]) {
      let temp = nums[i];
      nums[i] = nums[currentIdx];
      nums[currentIdx] = temp;
    } else {
      i++;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != j + 1) {
      return j + 1;
    }
  }
  return nums.length + 1;
};
