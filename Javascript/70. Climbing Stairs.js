// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let num = [1, 1];
  for(let i = 2; i <= n; i++){
    num[i] = num[i - 1] + num[i - 2];
  }
  return num[n];
};