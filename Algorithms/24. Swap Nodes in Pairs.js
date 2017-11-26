/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 空头指针
var swapPairs = function(head) {
  let empty = new ListNode(), tail = null, first, second;
  empty.next = head;
  head = empty;
  while ((first = head.next) && (second = first.next)) {
    tail = second.next;
    head.next = second;
    second.next = first;
    first.next = tail;
    head = first;
  }
  return empty.next;
};