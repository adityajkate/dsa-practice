// Method 1
let str = "hello";
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   rev = rev + str[i];
// }

// if (str == rev) {
//   console.log("Strings are Palindrome!");
// } else {
//   console.log("Strings are not Palindrome!");
// }

// Method 2
let i = 0,
  j = str.length - 1;
let isPalindrome = true;
while (i < j) {
  if (str[i] != str[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}
isPalindrome
  ? console.log("String is Palindrome!")
  : console.log("String is not Palindrome!");
