// Given n non-negative integers representing an elevation map
// where the width of each bar is 1, compute how much water 
// it is able to trap after raining.

// For example, 
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

/**
 * @param {number[]} height
 * @return {number}
 */
 
// DP, use two array, three iteration
var trap = function(height) {
  let len = height.length;
  if(!len) return 0;
  let left_max = [],
      right_max = [];
  left_max[0] = height[0];
  for(let i = 1; i < len; i++){
    left_max[i] = Math.max(left_max[i - 1], height[i]);
  }
  right_max[len - 1] = height[len - 1];
  for(let i = len - 2; i >= 0; i--){
    right_max[i] = Math.max(right_max[i + 1], height[i]);
  }
  let res = 0;
  for(let i = 0; i < len; i++){
    res += Math.min(left_max[i], right_max[i]) - height[i];
  }
  return res;  
};

// two pointer, two ways to write
var trap = function(height){
  let len = height.length;
  if(!len) return 0;
  let lp = 0, 
      rp = len - 1,
      left_max = 0,
      right_max = 0,
      res = 0;
  while(lp < rp){
    if(height[lp] < height[rp]){
      (left_max > height[lp]) ? (res += left_max - height[lp]) : (left_max = height[lp]);
      lp++;
    }
    else{
      (right_max > height[rp]) ? (res += right_max - height[rp]) : (right_max = height[rp]);
      rp--;
    }
  }
  return res;
};
