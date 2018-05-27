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
// recursively
// var isSymmetric = function(root) {
//   function isMirror(a, b){
//     if(a === null)
//       return b === null;
//     if(b === null) return false;
//     return a.val === b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left);
//   }
//   if(!root) return true;
//   return isMirror(root.left, root.right);  
// };
// iteratively， use queue
var isSymmetric = function(root){
  if(!root) return true;
  let queue = [];
  queue.unshift(root, root);
  while(queue.length !== 0){
    let node1 = queue.pop(),
        node2 = queue.pop();
    if(node1 === null && node2 === null) continue;
    if(node1 === null || node2 === null) return false;
    if(node1.val !== node2.val) return false;
    queue.unshift(node2.left, node1.right, node2.right, node1.left);
  }
  return true;
}