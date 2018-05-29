/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// 链表无法得知节点的上一个节点，所以需要一个变量来同步，如tail->next == p, prev->next == pos
// 还有方法就是始终记录上一个节点，实际考察的节点为其next
class Solution {
public:
    ListNode* insertionSortList(ListNode* head) {
        if(head == NULL || head->next == NULL) return head;
        ListNode dummy(0); // 假头节点，便于插入
        dummy.next = head;
        ListNode *tail = head, *p = tail->next, *prev, *pos;
        // tail为已排好序的结尾，p为将要插入的节点
        while(p) {
            if(p->val >= tail->val) { 
                // 若p不小于tail，则p已在正确位置，不需要找位置插入，
                // 如果没有这步，每次插入要遍历有序部分，会TLE
                tail = tail->next;
                p = p->next;
                continue;
            }
            prev = &dummy; pos = prev->next;
            // 寻找插入位置，使prev < p <= pos
            while(pos != NULL && pos->val < p->val) {
                pos = pos->next;
                prev = prev->next;
            }
            // p插入prev,pos之间，p后面的部分接到tail之后
            prev->next = p;
            p = p->next;
            prev->next->next = pos;
            pos->next = p;
        }
        return dummy.next;
    }
};