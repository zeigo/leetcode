/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// recursive
// var inorderTraversal = function(root) {
//   if(!root) return [];
//   let {val, left, right} = root;
//   return inorderTraversal(left).concat([val], inorderTraversal(right));
// };

// iterate
var inorderTraversal = function(root){
  let p = root, stack = [], res = [];
  while(p || stack.length){
    while(p){
      stack.push(p);
      p = p.left;
    }
    p = stack.pop();
    res.push(p.val);
    p = p.right;
  }
  return res;
}
