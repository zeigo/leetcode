/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(n2) brute force
var find132pattern = function(nums) {
  let min = nums[0],
    len = nums.length
  for (let i = 1; i < len; i++) {
    min = Math.min(min, nums[i])
    for (let j = i + 1; j < len; j++) {
      if (min < nums[j] && nums[i] > nums[j]) return true
    }
  }
  return false
};

// stack O(n) 栈中递减，都比third大，从右往左扫
// third是已扫描范围内，能保证其左边有大于third的数所能取到的最大值
// 而second保存的是已扫描范围内大于third的数
var find132pattern = function(nums) {
  let third = Number.MIN_SAFE_INTEGER,
    second = []
  for (let i = nums.length - 1; i >= 0; i--) {
    let num = nums[i]
    if (num < third) return true
    while (second.length !== 0 && num > second[second.length - 1]) {
      third = second.pop()
    }
    second.push(num)
  }
  return false
}