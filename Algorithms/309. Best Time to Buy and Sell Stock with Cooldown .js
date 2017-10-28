/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let len = prices.length,
      has1Sell = 0,
      has1None = -prices[0],
      has0Buy = -prices[0],
      has0None = 0;
  for(let i = 1; i < len; i++){
    let p = prices[i];
    has1None = Math.max(has1None, has0Buy);
    has0Buy = has0None - p;
    has0None = Math.max(has1Sell, has0None);
    has1Sell = has1None + p;
  }
  return Math.max(has1Sell, has0None);
};