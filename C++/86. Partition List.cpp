/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// notLessHead为头节点0，到notLessTail为原链表中不小于x的部分
// lessHead为头节点0，到lessTail为小于x节点的链表
// 直接将原链表接到lessHead后，按next迭代访问。小于x时，该节点接到lessTail之后，并成为新的lessTail；
// 不小于x时，将该节点移出链表，接到notLessTail之后，成为新的notLessTail。最后将两链表相连
// 如head:1-4-3-2, x=3
//          原链表         lessHead到lessTail     notLessHead到notLessTail
// 初始     0-1-4-3-2          0                    0
// 1<3     0-1-4-3-2          0-1                  0
// 4>=3    0-1-3-2            0-1                 0-4
// 3>=3    0-1-2              0-1                 0-4-3
// 2<3     0-1-2              0-1-2               0-4-3
// 合并1-2-4-3 
class Solution {
public:
    ListNode* partition(ListNode* head, int x) {
        ListNode lessHead(0), notLessHead(0);
        ListNode *lessTail = &lessHead, *notLessTail = &notLessHead;
        lessHead.next = head;
        while(head != NULL) {
            if(head->val < x) {
                lessTail = head;
            } else {
                lessTail->next = head->next;
                head->next = NULL;
                notLessTail->next = head;
                notLessTail = head; 
            }
            head = lessTail->next;
        }
        lessTail->next = notLessHead.next;
        return lessHead.next;       
    }
};