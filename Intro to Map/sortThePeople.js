names = ["Marry", "John", "Emma"];
hieghts = [180, 165, 170];
let ans = [];
/*
    180 - Marry
    165 - John
    170 - Emma
*/
/*
    Marry , Emma, John
*/
let lenghtOfNames = names.length;
let map = new Map();
for (let i = 0; i < lenghtOfNames; i++) {
  map.set(hieghts[i], names[i]);
}

console.log(map);

// Sort hieght array in descending order.
for (let i = 0; i < hieghts.length; i++) {
  for (let j = i + 1; j < hieghts.length; j++) {
    if (hieghts[i] < hieghts[j]) {
      let temp = hieghts[i];
      hieghts[i] = hieghts[j];
      hieghts[j] = temp;
    }
  }
}

console.log(hieghts);

for (let i = 0; i < hieghts.length; i++) {
  ans.push(map.get(hieghts[i]));
}

console.log(ans);
