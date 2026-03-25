// Leetcode : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    let profit = prices[i] - min;
    maxProfit = Math.max(profit, maxProfit);
  }
  return maxProfit;
};
