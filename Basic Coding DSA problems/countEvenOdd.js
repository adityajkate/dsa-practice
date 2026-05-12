let arr = [1, 2, 44, 22, 4, 7, 3];

let even = 0,
  odd = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even++;
    continue;
  }
  odd++;
}

console.log("Count of Even Numbers are : ", even);
console.log("Count of Odd Numbers are : ", odd);
