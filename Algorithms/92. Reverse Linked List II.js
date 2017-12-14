/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  var empty = new ListNode()//空头节点
  empty.next = head
  pre = empty //pre为m前一个节点
  var i = 1
  while (i < m) {
    pre = pre.next
    i++
  }
  var newLinkList = null, p, last = pre.next
  //newLinkList存储reverse部分，last保存newLinkList最后
  while (i <= n) {
    p = pre.next
    pre.next = p.next
    p.next = newLinkList
    newLinkList = p
    i++
  }
  p = pre.next
  pre.next = newLinkList
  last.next = p
  return empty.next
};