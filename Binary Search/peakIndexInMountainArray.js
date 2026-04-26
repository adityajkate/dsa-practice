// Leetcode : https://leetcode.com/problems/peak-index-in-a-mountain-array/
var peakIndexInMountainArray = function (arr) {
  let f = 0,
    l = arr.length - 1;
  while (f < l) {
    let mid = Math.floor((f + l) / 2);
    if (arr[mid] <= arr[mid + 1]) {
      f = mid + 1;
    } else l = mid;
  }
  return l;
};
