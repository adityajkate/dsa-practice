// Leetcode link : https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function (nums, target) {
  let f = 0,
    l = nums.length - 1;
  while (f <= l) {
    let mid = Math.floor((f + l) / 2);
    if (nums[mid] === target) return mid;
    if (nums[f] <= nums[mid]) {
      if (nums[f] <= target && target <= nums[mid]) {
        l = mid;
      } else {
        f = mid + 1;
      }
    } else {
      if (nums[mid + 1] <= target && target <= nums[l]) {
        f = mid + 1;
      } else {
        l = mid;
      }
    }
  }
  return -1;
};
