/*
    1
    12
    123
    1234    
    12345
*/

let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(j);
  }
  console.log(i);
}
