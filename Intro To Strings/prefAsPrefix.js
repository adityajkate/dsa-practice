/*
    Problem Statement :
    Take an array of string words and a string prefix. Print the number of strings in the words that contains pref as prefix.
*/

let words = ["pay", "teatntion", "practice", "attend"];
let pref = "at";

let count = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i].startsWith(pref)) count++;
}
console.log(count);
