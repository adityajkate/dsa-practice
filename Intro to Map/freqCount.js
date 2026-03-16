let arr = [1, 2, 3, 1, 3, 1, 10, 9, 10, 9, 1, 12];
let map = new Map();

for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
  else map.set(arr[i], 1);
}

for (let [key, value] of map.entries()) {
  console.log(key + " -> " + value);
}
