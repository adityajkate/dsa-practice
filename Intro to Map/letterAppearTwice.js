// Leetcode Link : https://leetcode.com/problems/first-letter-to-appear-twice/

let s = "abccbaacz";
let map = new Map();
for (let i = 0; i < s.length; i++) {
  let char = s.charAt(i);
  if (map.has(char)) {
    map.set(char, map.get(char) + 1);
    if (map.get(char) == 2) {
      console.log(s.charAt(i));
      break;
    }
  } else {
    map.set(char, 1);
  }
}
