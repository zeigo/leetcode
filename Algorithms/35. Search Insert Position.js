/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 找到第一个不小于target的位置，二分查找
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1, mid;
  while(left <= right) {
    mid = parseInt((left + right)/2);
    if(nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left; 
};