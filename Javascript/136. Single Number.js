/**
 * @param {number[]} nums
 * @return {number}
 */

// hashMap time O(n) zone O(n)
// var singleNumber = function(nums) {
//   let hashObj = {},
//       len = nums.length;
//   for(let i = 0; i < len; i++){
//     if(hashObj[nums[i]])
//       delete hashObj[nums[i]];
//     else
//       hashObj[nums[i]] = nums[i];
//   }
//   return Object.values(hashObj).pop();
// };

// XOR bit manipulation
var singleNumber = function(nums) {
    let val = 0, len = nums.length;
    for(let i = 0; i < len; i++) {
        val ^= nums[i];
    }
    return val;
};
