/**
 * 
 * @param {number []} nums 
 * @param {number} left 
 * @param {number} right 
 * @param {number} current
 * @param {number} target
 * @param {number[][]} res 
 */
var find = function (nums, left, right, current, target, res) {
  while (left < right) {
    const leftValue = nums[left],
      rightValue = nums[right],
      sum = leftValue + rightValue + current;
    if (sum === target) {
      res.push([current, leftValue, rightValue]);
      while(left < right && nums[left] === nums[left + 1]) left++;
      while(left < right && nums[right] === nums[right - 1]) right--;
      left++;
      right--;
    } else if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0, len = nums.length; i < len - 2; i++) {
    if (nums[i] === nums[i - 1]) // 去重
      continue;
    find(nums, i + 1, len - 1, nums[i], 0, res);
  }
  return res;
};