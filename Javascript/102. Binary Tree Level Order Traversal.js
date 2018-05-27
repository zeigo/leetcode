/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [],
    res = [];
  queue.unshift(root);
  while (queue.length !== 0) {
    const size = queue.length,
      currentLine = [];
    for (let i = 0; i < size; i++) {
      let begin = queue.shift();
      if (begin.left) queue.push(begin.left);
      if (begin.right) queue.push(begin.right);
      currentLine.push(begin.val);
    }
    res.push(currentLine);
  }
  return res;

};