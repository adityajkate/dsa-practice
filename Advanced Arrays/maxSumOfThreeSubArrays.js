// LeetCode:  https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/
var maxSumOfThreeSubarrays = function (nums, k) {
  let n = nums.length;

  // Step 1: compute window sums
  let sums = [];
  let windowSum = 0;

  for (let i = 0; i < n; i++) {
    windowSum += nums[i];
    if (i >= k) windowSum -= nums[i - k];
    if (i >= k - 1) sums.push(windowSum);
  }

  let m = sums.length;

  // Step 2: best left index
  let left = Array(m).fill(0);
  let best = 0;
  for (let i = 0; i < m; i++) {
    if (sums[i] > sums[best]) best = i;
    left[i] = best;
  }

  // Step 3: best right index
  let right = Array(m).fill(0);
  best = m - 1;
  for (let i = m - 1; i >= 0; i--) {
    if (sums[i] >= sums[best]) best = i;
    right[i] = best;
  }

  // Step 4: try middle
  let result = [-1, -1, -1];
  let maxTotal = 0;

  for (let mid = k; mid < m - k; mid++) {
    let l = left[mid - k];
    let r = right[mid + k];

    let total = sums[l] + sums[mid] + sums[r];

    if (total > maxTotal) {
      maxTotal = total;
      result = [l, mid, r];
    }
  }

  return result;
};
