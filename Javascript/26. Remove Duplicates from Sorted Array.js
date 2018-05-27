/**
 * @param {number[]} nums
 * @return {number}
 */
// 重复片段只留第一个,splice时间太长
var removeDuplicates = function (nums) {
  var i = 0, j
  for (j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums.splice(i + 1, j - i - 1)
      j = ++i
    }
  }
  return i + 1
};

// 当出现未出现过的，赋值到i+1，最后返回要截取的长度
var removeDuplicates = function (nums) {
  var i = 0
  for (var j = 1, len = nums.length; j < len; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j]
    }
  }
  return i + 1
}