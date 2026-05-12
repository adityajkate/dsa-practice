let map = new Map();
map.set(0, "Zero");
map.set(1, "One");
map.set(2, "Two");
map.set(3, "Three");
map.set(4, "Four");
map.set(5, "Five");
map.set(6, "Six");
map.set(7, "Seven");
map.set(8, "Eight");
map.set(9, "Nine");

let x = 567;
let b = [];
while (x) {
  let a = x % 10;
  b.push(map.get(a));
  x = Math.floor(x / 10);
}

b = b.reverse().join(" ");
console.log(b);
