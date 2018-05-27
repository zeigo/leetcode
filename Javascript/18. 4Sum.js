/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 还是跟3Sum一样的思路，多一层循环
var fourSum = function (nums, target) {
  function find(l, r, first, second) {
    while (l < r) {
      const sum = nums[l] + nums[r] + first + second;
      if (sum === target) {
        res.push([first, second, nums[l], nums[r]]);
        while(l < r && nums[l] === nums[l + 1]) l++;
        while(l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }
  nums = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0, len = nums.length; i < len - 3; i++) {
    if (nums[i] === nums[i - 1]) //为防止重复，已用过的nums[i]值不能再用
      continue;
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) //为防重复同样处理，注意j==i+1情况
        continue;
      find(j + 1, len - 1, nums[i], nums[j]);
    }
  }
  return res;
};