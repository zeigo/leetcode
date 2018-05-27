/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// recursive
var minDepth = function(root) {
  if(!root) return 0;
  let l = minDepth(root.left),
      r = minDepth(root.right);
  return 1 + (Math.min(l, r) || Math.max(l, r));  
};

