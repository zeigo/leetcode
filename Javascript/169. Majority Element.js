/**
 * @param {number[]} nums
 * @return {number}
 */
// hashMap
var majorityElement = function(nums) {
  let hashMap = new Map(),
    half = nums.length / 2
  for (let num of nums) {
    let count = hashMap.get(num)
    if (count === undefined)
      hashMap.set(num, 1)
    else
      hashMap.set(num, count + 1)
  }
  for (let [k, v] of hashMap.entries()) {
    if (v > half) return k
  }
};

// Boyer-Moore Voting Algorithm
// 一对不同的元素对count的影响可以消除，
// 消到最后剩下的肯定是超过半数的那个
var majorityElement = function(nums) {
  let count = 0, major
  for (let num of nums) {
    if (count === 0) {
      major = num
      count++
    }
    else {
      major === num ? count++ : count--
    }
  }
  return major
}