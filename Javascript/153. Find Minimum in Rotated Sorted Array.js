/**
 * @param {number[]} nums
 * @return {number}
 */
// 找到第一个下滑的地方
// 若n[l] <= n[mid]，有序，left = mid + 1
// 若n[l] > n[mid]，则最小处不大于mid，right = mid
var findMin = function(nums) {
  let left = 0, right = nums.length - 1, mid;
  while(left <= right) {
    if(nums[left] <= nums[right])
      return nums[left];
    mid = parseInt((left + right) / 2);
    if(nums[mid] < nums[left]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];  
};