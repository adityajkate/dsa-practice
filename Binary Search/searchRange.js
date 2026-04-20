// Leetcode : https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function (nums, target) {
  function findFirst() {
    let left = 0,
      right = nums.length - 1,
      ans = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        ans = mid;
        right = mid - 1; // move left
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return ans;
  }

  function findLast() {
    let left = 0,
      right = nums.length - 1,
      ans = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        ans = mid;
        left = mid + 1; // move right
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return ans;
  }

  return [findFirst(), findLast()];
};
