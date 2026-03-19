// Check whether the number is even or odd using & (AND) operator

let a = [10, 11, 29, 30];
for (let i = 0; i < a.length; i++) {
  if ((a[i] & 1) == 0) {
    console.log("The given number is even:", a[i]);
  } else {
    console.log("The given number is odd:", a[i]);
  }
}
