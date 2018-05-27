/**
 * @param {number[]} prices
 * @return {number}
 */
// find valleys and peaks
var maxProfit = function(prices) {
  let len = prices.length,
      i = 0,
      peak = prices[0],
      valley = prices[0],
      max = 0;
  while(i < len - 1){
    while(i < len - 1 && prices[i] >= prices[i + 1]){
      i++;
    }
    valley = prices[i];
    while(i < len - 1 && prices[i] <= prices[i + 1]){
      i++;
    }
    peak = prices[i];
    max += peak - valley;
  }
  return max;
};
// just simple one pass, 4->5->6 equal 4->6
var maxProfit = function(prices) {
  let len = prices.length,
      max = 0;
  for(let i = 0; i < len - 1; i++){
    if(prices[i + 1] >= prices[i]){
      max += prices[i + 1] - prices[i];
    }
  }
  return max;
}

