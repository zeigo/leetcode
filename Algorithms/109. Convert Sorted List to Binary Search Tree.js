/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 快慢指针找到中间root，再递归左右链表 O(NlogN)
// var sortedListToBST = function(head) {
//   function getMidAndPre(head){ // 中间及前一个节点
//     let p = head, pre = null, mid = head;
//     while(p){
//       p = p.next;
//       if(!p) break;
//       p = p.next;
//       if(!p) break;
//       pre = mid;
//       mid = mid.next;
//     }
//     return [pre, mid];
//   }
//   if(!head) return null;
//   let [pre, mid] = getMidAndPre(head);
//   let node = new TreeNode(mid.val);
//   if(!pre){
//     node.left = null;
//   } else{
//     pre.next = null;
//     node.left = sortedListToBST(head);
//   }
//   node.right = sortedListToBST(mid.next);
//   return node;  
// };

// inorder，从左到右遍历，p指向还未进入树的第一个，从而使得此时p的值即将为根节点
// 理解递归做了什么，而不是怎么做 *
var sortedListToBST = function(head) {
  if(!head) return null;
  let len = 0, p = head;
  while(p){
    p = p.next;
    len++;
  }
  function helper(l, r){
    if(l > r) return null;
    let mid = parseInt((l + r) / 2);
    let left = helper(l, mid - 1);
    let node = new TreeNode(p.val);
    node.left = left;
    p = p.next;
    let right = helper(mid + 1, r);
    node.right = right;
    return node;
  }
  p = head;
  return helper(0, len - 1);
}
