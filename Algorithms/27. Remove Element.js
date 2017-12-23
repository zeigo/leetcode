/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 快慢指针，赋值操作太多
var removeElement = function(nums, val) {
  var i = 0
  for (var j = 0, len = nums.length; j < len; j++) {
    if (nums[j] !== val) {
      nums[i++] = nums[j]
    }
  }
  return i
};

// 利用顺序可变减少赋值操作
var removeElement = function(nums, val) {
  var i = 0, len = nums.length
  while (i < len) {
    if (nums[i] === val) {
      nums[i] = nums[len - 1]
      len--
    }
    else {
      i++
    }
  }
  return i
}