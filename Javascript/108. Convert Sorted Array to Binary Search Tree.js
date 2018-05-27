/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// recursive
var sortedArrayToBST = function(nums) {
  function helper(l, r){
    if(l > r) return null;
    let mid = parseInt((l + r) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = helper(l, mid - 1);
    node.right = helper(mid + 1, r);
    return node;
  } 
  return helper(0, nums.length - 1);
};