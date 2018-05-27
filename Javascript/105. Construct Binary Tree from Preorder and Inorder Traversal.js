/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// pre: 3/2,1/4,5,7
// in: 1,2/3/5,4,7
// recursive
// var buildTree = function(preorder, inorder) {
//   if(!preorder.length) return null;
//   let root = preorder[0];
//   let rIndex = inorder.indexOf(root);
//   let left = buildTree(preorder.slice(1, rIndex + 1), inorder.slice(0, rIndex));  
//   let right = buildTree(preorder.slice(rIndex + 1), inorder.slice(rIndex + 1));
//   let node = new TreeNode(root);
//   node.left = left;
//   node.right = right;
//   return node;  
// };

// hashtable
var buildTree = function(preorder, inorder) {
  let len = preorder.length;
  if(!len) return null;
  let map = {};
  inorder.forEach(function(value, index){
    map[value] = index;
  });
  function helper(p1, p2, i1, i2){
    if(p1 > p2) return null;
    let root = preorder[p1];
    let rIndex = map[root];
    let left = helper(p1 + 1, p1 + rIndex - i1, i1, rIndex - 1);
    let right = helper(p2 + rIndex + 1 - i2, p2, rIndex + 1, i2);  
    let node = new TreeNode(root);
    node.left = left;
    node.right = right;
    return node; 
  }
  return helper(0, len - 1, 0, len - 1); 
}
