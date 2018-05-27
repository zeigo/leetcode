/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// recursive
var hasPathSum = function(root, sum) {
  if(root === null) return false;
  const remain = sum - root.val;
  if(remain === 0 && root.left === null && root.right === null)
    return true;
  return hasPathSum(root.left, remain) || hasPathSum(root.right, remain)

};