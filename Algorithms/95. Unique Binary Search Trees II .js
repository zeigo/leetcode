/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// var generateTrees = function(n) {
//   function helper(from, to) {
//     if(from > to) return [null];
//     let res = [];
//     for(let i = from; i <= to; i++){
//       helper(from, i - 1).forEach(function(left){
//         helper(i + 1, to).forEach(function(right){
//           let node = new TreeNode(i);
//           node.left = left;
//           node.right = right;
//           res.push(node);
//         });
//       });
//     }
//     return res;
//   }
//   return n ? helper(1, n) : [];
// };

// 1, 2, 3, .., n,固定i为根节点,1~i-1,i+1~n组合,使用store缓存长度n的结果
var generateTrees = function(n) {
  function clone(origin, offset){
    if(!origin) return null;
    let node = new TreeNode(origin.val + offset);
    node.left = clone(origin.left, offset);
    node.right = clone(origin.right, offset);
    return node;    
  }
  let store = [];
  store[0] = [null];
  for(let i = 1; i <= n; i++){
    let res = [];
    for(let j = 0; j <= i - 1; j++){
      store[j].forEach((left) => {
        store[i - 1 - j].forEach((right) => {
          let node = new TreeNode(i);
          node.left = left;
          node.right = clone(right, j);
          res.push(node); 
        });
      });
    }
    store.push(res);
  }
  return store[n];
}

