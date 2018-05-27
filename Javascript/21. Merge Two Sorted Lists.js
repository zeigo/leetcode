/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// recursive
// var mergeTwoLists = function(l1, l2) {
//   if(!l1) return l2;
//   if(!l2) return l1;
//   if(l1.val < l2.val){
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   }
//   else{
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// };
// iterative 
var mergeTwoLists = function(l1, l2){
  let head = new ListNode(0);
  let pointer = head;
  while(l1 && l2){
    if(l1.val < l2.val){
      pointer.next = l1;
      l1 = l1.next;
    }
    else{
      pointer.next = l2;
      l2 = l2.next;
    }
    pointer = pointer.next;
  }
  pointer.next = l1 || l2;
  return head.next;
};
