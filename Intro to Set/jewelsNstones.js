// Leetcode - https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function (jewels, stones) {
  let set = new Set();
  for (let i = 0; i < jewels.length; i++) {
    set.add(jewels.charAt(i));
  }

  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones.charAt(i))) {
      count = count + 1;
    }
  }
  return count;
};
