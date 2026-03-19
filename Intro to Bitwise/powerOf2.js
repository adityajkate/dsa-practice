// Check whether the given number is a power of 2 or not.

let arr = [64, 29, 81, 90, 128, 72, 4];
for (let i = 0; i < arr.length; i++) {
  if ((arr[i] & (arr[i] - 1)) === 0) {
    console.log("The given number is Power of 2:", arr[i]);
  } else {
    console.log("The given number is not Power of 2:", arr[i]);
  }
}
