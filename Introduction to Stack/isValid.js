// Leetcode link : https://leetcode.com/problems/valid-parentheses/description/

function isValid(s) {
  let stack = [];
  let pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let ch of s) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    } else {
      let top = stack.pop();

      if (top !== pairs[ch]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([{}])")); // true
console.log(isValid("(((")); // false
