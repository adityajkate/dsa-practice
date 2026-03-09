// Method 1
let a = 10;
let b = 20;
console.log(a, b);

let sum = a + b;
a = sum - a;
b = sum - a;

console.log(a, b);

// Method 2
let a = 10;
let b = 20;
console.log(a, b);

let temp = a;
a = b;
b = temp;

console.log(a, b);

// Method 3
let a = 10;
let b = 20;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);
