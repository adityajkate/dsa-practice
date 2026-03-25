// Leetcode link : https://leetcode.com/problems/majority-element/

var majorityElement = function (nums) {
  // Booyer Moore's Voting Algorithm
  let count = 1;
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      ans = nums[i];
      count = 1;
    } else if (ans != nums[i]) {
      count--;
    } else {
      count++;
    }
  }
  return ans;
};
