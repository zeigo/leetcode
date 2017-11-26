/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  function find (left, right, current) {
    while (left < right) {
      const leftValue = nums[left],
        rightValue = nums[right],
        sum = leftValue + rightValue + current,
        newDiff = Math.abs(sum - target);
      if (newDiff < diff) {
        diff = newDiff;
        closestSum = sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  nums = nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2],
    diff = Math.abs(target - closestSum);
  for (let i = 0, len = nums.length; i < len - 2; i++) {
    if (nums[i] === nums[i - 1]) // 去重
      continue;
    find(i + 1, len - 1, nums[i]);
  }
  return closestSum;
};
