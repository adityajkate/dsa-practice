// Panagram is a string is that all letters are lowercase and contains atleast all characters of alphabets.

// Leetcode link - https://leetcode.com/problems/check-if-the-sentence-is-pangram/

let sentence = "adItya";
sentence = sentence.toLowerCase();

let set = new Set();
for (let i = 0; i < sentence.length; i++) {
  let word = sentence.charAt(i);
  set.add(word);
}

if (set.size === 26) {
  console.log("The String is Panagram");
} else {
  console.log("The String is not Panagram");
}
