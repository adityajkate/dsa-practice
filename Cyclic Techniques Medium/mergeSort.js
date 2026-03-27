/**
 * Merge Sort using:
 * divide(arr, first, last)
 * conqueror(arr, first, mid, last)
 */

function mergeSort(arr) {
  const temp = new Array(arr.length);
  divide(arr, 0, arr.length - 1, temp);
  return arr;
}

function divide(arr, first, last, temp) {
  if (first >= last) return;

  const mid = (first + last) >> 1;

  divide(arr, first, mid, temp);
  divide(arr, mid + 1, last, temp);

  // optimization: already sorted
  if (arr[mid] <= arr[mid + 1]) return;

  conqueror(arr, first, mid, last, temp);
}

function conqueror(arr, first, mid, last, temp) {
  let i = first; // left half
  let j = mid + 1; // right half
  let k = first; // temp index

  while (i <= mid && j <= last) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i <= mid) temp[k++] = arr[i++];
  while (j <= last) temp[k++] = arr[j++];

  for (let p = first; p <= last; p++) {
    arr[p] = temp[p];
  }
}
