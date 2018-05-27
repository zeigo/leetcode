/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// divide and conquer
var mergeKLists = function(lists) {
  function mergeTwoLists(l1, l2){
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val < l2.val){
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    }
    else{
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  }
  function helper(left, right){
    if(left === right) return lists[left];
    let mid = parseInt((left + right) / 2);
    return mergeTwoLists(helper(left, mid), helper(mid + 1, right));
  }
  if(!lists || lists.length === 0) return null;
  return helper(0, lists.length - 1);
};

// priority queue
