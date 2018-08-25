/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* newHead = nullptr, *current = head, *tmp;
        // current正在访问的结点，newHead已访问结点的链倒转后的头结点
        // newHead接到current之后，current更新为原来的next
        while(current) {
            tmp = current->next;
            current->next = newHead;
            newHead = current;
            current = tmp;
        }
        return newHead;
    }
    
};