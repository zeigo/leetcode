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
// backtrack
var sumNumbers = function(root) {
  if(!root) return 0;
  let res = 0;
  function backtrack(r, tmp) {
    if(r.left) {
      tmp.push(r.val);
      backtrack(r.left, tmp);
      tmp.pop();
    }
    if(r.right) {
      tmp.push(r.val);
      backtrack(r.right, tmp);
      tmp.pop();
    }
    if(!r.left && !r.right) { //到叶节点填入res
      res += parseInt(tmp.concat(r.val).join(""));
    }
  }
  backtrack(root, []);
  return res;  
};

// dfs + stack
var sumNumbers = function(root) {
  if(!root) return 0;
  let stk = [], res = 0, p;
  stk.push([root, root.val]);
  while(stk.length) {
    let [p, value] = stk.pop();
    if(!p.left && !p.right)
      res += value;
    if(p.right)
      stk.push([p.right, 10 * value + p.right.val])
    if(p.left)
      stk.push([p.left, 10 * value + p.left.val])
  }
  return res;
}

