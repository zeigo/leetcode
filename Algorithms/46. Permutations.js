/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// recursive [1,2,3], 1 with permute([2,3]), 2 with permute([1,3])
// var permute = function(nums) {
//   let res = [], len = nums.length;
//   if(len === 1) return [nums];
//   for(let i = 0; i < len; i++) {
//     let copy = nums.slice(),
//         current = nums[i];
//     copy.splice(i, 1);
//     let innerRes = permute(copy);
//     innerRes.forEach(arr => arr.unshift(current));
//     res = res.concat(innerRes);
//   }
//   return res;
// };
// iterative, a1a2/a2a1，有三个位置插入a3，依次类推

// backtrack，逐次从remain中挑出填入tmp，填满后回溯
var permute = function(nums) {
  let res = [];
  backtrack(nums, []);
  function backtrack(remain, tmp) {
    const len = remain.length;
    if(len === 0) {
      res.push(tmp.slice());
      return ;
    }
    for(let i = 0; i < len; i++) {
      let copy = remain.slice();
      tmp.push(copy[i]);
      copy.splice(i, 1);
      backtrack(copy, tmp);
      tmp.pop();
    }
  }
  return res;
}
