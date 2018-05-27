/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var empty = new ListNode(0), p1 = empty, p2 = head
  empty.next = head
  while (p2) {
    if (p2.val === val) {
      p1.next = p2.next
    }
    else {
      p1 = p1.next
    }
    p2 = p1.next
  }
  return empty.next
};