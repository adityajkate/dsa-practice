// Leetcode link - https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set = new Set(nums1);
  let ans = new Array();

  for (let i = 0; i < nums2.length; i++) {
    let a = nums2[i];
    if (set.has(a) && !ans.includes(a)) {
      ans.push(a);
    }
  }
  return ans;
};
