// Leetcode link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
var removeDuplicates = function (nums) {
  let i = 0;
  let j = i + 1;
  while (i < nums.length - 1) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
    i++;
  }
  return j;
};
