let str = "he";
let ans = "";
let newArr = str.split(" ");

for (let i = 0; i < newArr.length; i++) {
  let word = newArr[i];
  if (word.length <= 2) {
    ans += word.toUpperCase();
  } else {
    ans +=
      word.charAt(0).toUpperCase() +
      word.substring(1, word.length - 1) +
      word.charAt(word.length - 1).toUpperCase() +
      " ";
  }
}

console.log(ans);
