/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// recursive, postorder, helper: 将r树右倾斜展直，末尾接上last，last再指向r
// 类似于分别展开左右子树，再将左右链拼接，使用last避免了连接左右链时要找链末端
var flatten = function(root) {
  let last = null;
  function helper(r) {
    if(!r) return ;
    helper(r.right);
    helper(r.left);
    r.left = null;
    r.right = last;
    last = r;
  }
  helper(root);
};
// iterative, 当p存在左子树时，找出左子树最右子节点，连接到p.right
// p.right指向p.left，p.left = null
var flatten = function(root) {
  let p = root;
  while(p) {
    if(p.left) {
      let mostRight = p.left;
      while(mostRight.right) {
        mostRight = mostRight.right;
      }
      mostRight.right = p.right;
      p.right = p.left;
      p.left = null;
    }
    p = p.right;
  }
}
// stack, preorder，栈先进后出，先进右节点，每次出栈就连到right
var flatten = function(root) {
  if(!root) return;
  let stk = [], p;
  stk.push(root);
  while(stk.length) {
    p = stk.pop();
    if(p.right) stk.push(p.right);
    if(p.left) stk.push(p.left);
    if(stk.length) p.right = stk[stk.length - 1];
    p.left = null;
  }
}


