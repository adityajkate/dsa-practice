// Leetcode : https://leetcode.com/problems/container-with-most-water/
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1,
    ans = 0;
  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
    if (height[i] > height[j]) j--;
    else i++;
  }
  return ans;
};
