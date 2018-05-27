/**
 * @param {number[][]} triangle
 * @return {number}
 */
// time limit exceed，会有重复计算情况，到同一个节点有不同path
var minimumTotal = function(triangle) {
  let min, row = triangle.length;
  function helper(i, j, cur) {
    const tmp = triangle[i][j];
    if(i >= row - 1) {
      min = min === undefined ? (cur + tmp) : Math.min(min, cur + tmp);
      return ;
    }
    helper(i + 1, j, cur + tmp);
    helper(i + 1, j + 1, cur + tmp);
  }
  helper(0, 0, 0);
  return min;  
};

// DP,只用一个数组保存结果, down-top
var minimumTotal = function(triangle) {
  let row = triangle.length;
  let dp = triangle[row - 1];
  for(let i = row - 2; i >= 0; i--) {
    for(let j = 0; j <= i; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
}