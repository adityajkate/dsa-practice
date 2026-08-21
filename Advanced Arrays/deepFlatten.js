function deepFlatten(arr) {
  let result = [];
  
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(deepFlatten(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
}

console.log(deepFlatten([1, [2, 3, [4, 5, [6, 7]], 8], 9]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
