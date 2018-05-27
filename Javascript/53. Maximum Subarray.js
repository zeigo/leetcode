/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   let len = nums.length,
//       storage = [],
//       max = nums[0];
//   storage[0] = nums[0];
//   // storage 存储以当前Index结束取的最大值，若要求返回片段，可同时记录对应的左边界
//   for(let i = 1; i < len; i++){
//     if(storage[i - 1] <= 0){
//       storage[i] = nums[i];
//     }
//     else{
//       storage[i] = nums[i] + storage[i - 1];
//     }
//     max = Math.max(max, storage[i]);
//   }
//   return max;
// };

// 优化：实际不用存储storage数组，只需知道前一个值
// var maxSubArray = function(nums) {
//   let len = nums.length,
//       storage = nums[0],
//       max = nums[0];
//   for(let i = 1; i < len; i++){
//     if(storage <= 0){
//       storage = nums[i];
//     }
//     else{
//       storage = nums[i] + storage;
//     }
//     max = Math.max(max, storage);
//   }
//   return max;
// };

// divide and conquer, O(NlogN) time limit exceeded
var maxSubArray = function(nums) {
  function helper(left, right){
    if(left === right) return nums[left];
    let mid = parseInt((left + right) / 2);
    let leftSubMax = helper(left, mid),
        rightSubMax = helper(mid + 1, right);
    let tmp = nums[mid], leftMax = nums[mid], rightMax = nums[mid + 1];
    for(let i = mid - 1; i >= 0; i--){
      tmp += nums[i];
      leftMax = Math.max(leftMax, tmp);
    }
    tmp = nums[mid + 1];
    for(let i = mid + 2; i <= right; i++){
      tmp += nums[i];
      rightMax = Math.max(rightMax, tmp);
    }
    return Math.max(leftSubMax, rightSubMax, leftMax + rightMax);    
  }
  return helper(0, nums.length - 1);
};
