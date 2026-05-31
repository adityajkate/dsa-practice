// Leetcode : https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function (nums1, nums2, k) {
  // Iterate over the smaller array for efficiency
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const n = nums2.length;

  function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }

  function upperBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }

  function countLessEqual(x) {
    let count = 0;

    for (const a of nums1) {
      if (a > 0) {
        // a * b <= x
        // b <= floor(x / a)
        const limit = Math.floor(x / a);
        count += upperBound(nums2, limit);
      } else if (a < 0) {
        // a * b <= x
        // b >= ceil(x / a)
        const limit = Math.ceil(x / a);
        count += n - lowerBound(nums2, limit);
      } else {
        // 0 * b = 0
        if (x >= 0) {
          count += n;
        }
      }
    }

    return count;
  }

  let left = -1e10;
  let right = 1e10;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (countLessEqual(mid) >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
