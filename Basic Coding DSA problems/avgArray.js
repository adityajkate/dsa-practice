let arr = [1, 2, 44, 22, 4, 7, 3];
let sum = 0;
let count = arr.length;

for (let i = 0; i < count; i++) {
  sum += arr[i];
}

console.log("Average numbers in array : ", Math.trunc(sum / count));
