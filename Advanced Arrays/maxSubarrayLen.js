function maxSubArrayLen(nums, k) {
  const prefixSumIndex = new Map();
  prefixSumIndex.set(0, -1); 
  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (prefixSumIndex.has(sum - k)) {
      maxLen = Math.max(maxLen, i - prefixSumIndex.get(sum - k));
    }
    if (!prefixSumIndex.has(sum)) {
      prefixSumIndex.set(sum, i);
    }
  }

  return maxLen;
}
console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3)); 
console.log(maxSubArrayLen([-2, -1, 2, 1], 1));    
