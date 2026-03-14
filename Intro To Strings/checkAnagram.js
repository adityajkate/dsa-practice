let s1 = "arc";
let s2 = "car";
let isAnagram = true;

let freqArr = new Array(123).fill(0);
if (s1.length != s2.length) {
  isAnagram = false;
} else {
  for (let i = 0; i < s1.length; i++) {
    let ascii = s1.charCodeAt(i);
    freqArr[ascii] += 1;
  }
  for (let i = 0; i < s2.length; i++) {
    let ascii = s2.charCodeAt(i);
    freqArr[ascii] -= 1;
  }
  for (let i = 0; i < freqArr.length; i++) {
    if (freqArr[i] != 0) {
      isAnagram = false;
      break;
    }
  }
}

isAnagram ? console.log("Anagrams!") : console.log("Not Anagrams!");
