function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  // detect cycle
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // find entry point
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
