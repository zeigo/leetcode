/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// 由快慢指针找出中点处，中点以后的部分截去并放入栈中，依此合并
class Solution {
public:
    void reorderList(ListNode* head) {
        if(!head) return;
        ListNode *slow = head, *fast = head;
        while(slow->next && fast->next && fast->next->next) {
            slow = slow->next;
            fast = fast->next->next;
        }        
        stack<ListNode *> stk;
        fast = slow->next;
        slow->next = nullptr;
        while(fast) {
            stk.push(fast);
            fast = fast->next;
        }
        fast = head;
        while(!stk.empty()) {
            stk.top()->next = fast->next;
            fast->next = stk.top();
            stk.pop();
            fast = fast->next->next;
        }
    }
};