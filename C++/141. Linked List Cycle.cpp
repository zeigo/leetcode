/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
 // hash table, space O(n)
 // Floyd Cycle Detect, double pointer
 // fast指针每次前进两步，slow指针每次前进一步，若存在环，则迟早fast会绕一圈追上slow；
 // 若无环，则fast会到达结尾null
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if(!head || !head->next) return false; // 至少两个节点构成环
        ListNode *slow = head, *fast = head->next;
        while(slow != fast) {
            if(!fast || !fast->next) return false;
            fast = fast->next->next;
            slow = slow->next;
        }
        return true;
    }
};