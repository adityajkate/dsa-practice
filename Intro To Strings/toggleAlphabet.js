// AbC => aBc
// adItyA => ADiTYa

let str = "RaJu";
let ans = "";
for (let i = 0; i < str.length; i++) {
  let ch = str.charCodeAt(i);
  if (ch >= 65 && ch <= 90) {
    ans = ans + String.fromCharCode(ch + 32);
  } else if (ch >= 97 && ch <= 122) {
    ans = ans + String.fromCharCode(ch - 32);
  }
}

console.log(ans);
