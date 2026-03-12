let str = "Aditya";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev = rev + str[i];
}

if (str == rev) {
  console.log("Strings are Palindrome!");
} else {
  console.log("Strings are not Palindrome!");
}
