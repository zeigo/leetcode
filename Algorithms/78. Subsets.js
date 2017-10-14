/*Given a set of distinct integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums){
  let res = nums.reduce((acc, value) => {
    let copy = acc.slice(); 
    // 注意copy的数组里面的数组元素复制引用，即acc[0] === copy[0]
    return acc.map((item) => {
      let copyItem = item.slice();
      copyItem.push(value);
      return copyItem;
    }).concat(copy);
  }, [[]]);
  return res;  
};
