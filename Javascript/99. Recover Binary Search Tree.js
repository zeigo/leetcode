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
// 中根遍历，发生非升序的位置即错误
var recoverTree = function(root) {
  let pre = null, //指向当前遍历的前一个
      first = null, //发生变异位置
      second = null;
  function inOrder(r){
    if(!r) return;
    inOrder(r.left); //遍历左子树
    if(!pre){
      pre = r;
    } else{
      if(pre.val > r.val){
        if(!first){
          first = pre;
        }
        second = r;
      }
      pre = r; //经过根节点
    }
    inOrder(r.right);
  }
  inOrder(root);
  if(first && second){
    let tmp = first.val;
    first.val = second.val
    second.val = tmp;
  }  
};
