var intersect = function (nums1, nums2) {
  let map = new Map(); // change: use Map instead of Set
  let ans = [];

  // change: build frequency map from nums1
  for (let i = 0; i < nums1.length; i++) {
    let a = nums1[i];
    map.set(a, (map.get(a) || 0) + 1);
  }

  // change: check count and decrement
  for (let i = 0; i < nums2.length; i++) {
    let a = nums2[i];
    if (map.get(a) > 0) {
      ans.push(a);
      map.set(a, map.get(a) - 1);
    }
  }

  return ans;
};
