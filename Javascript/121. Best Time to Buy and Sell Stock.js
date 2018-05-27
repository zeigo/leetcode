/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let len = prices.length,
      minNow = prices[0],
      max = 0;
  for(let i = 0; i < len; i++){
    minNow = Math.min(prices[i], minNow);
    max = Math.max(max, prices[i] - minNow);
  }
  return max;
};