/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// O(n2)
// var isBalanced = function(root) {
//   function depth(r){
//     if(!r) return 0;
//     return Math.max(depth(r.left), depth(r.right)) + 1;
//   }
//   if(!root) return true;
//   let dl = depth(root.left),
//       dr = depth(root.right);
//   return Math.abs(dl - dr) <= 1 && isBalanced(root.left) && isBalanced(root.right);
// };

// O(n) dfs  bottom-up, f:depth return truly depth if balanced, else -1
var isBalanced = function(root){
  function depth(r){
    if(!r) return 0;
    let dl = depth(r.left);
    if(dl === -1) return -1;
    let dr = depth(r.right);
    if(dr === -1) return -1;
    if(Math.abs(dl - dr) > 1) return -1;
    return Math.max(dl, dr) + 1;
  }
  return depth(root) != -1;
}
