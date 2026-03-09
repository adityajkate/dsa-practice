/*
 s = ( a + b + c ) / 2
 Area of Triangle = (s * s-a * s-b * s-c) ^ 1/2
 Condition : (a+b >= c || a+c >=b || b+c >= a)
*/

let a = 3;
let b = 4;
let c = 5;

if (a + b >= c || a + c >= b || b + c >= a) {
  let s = (a + b + c) / 2;
  let A = Math.sqrt(s * s - a * s - b * s - c);
  console.log(A);
} else {
  console.log("Triangle is not possible");
}
