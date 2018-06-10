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
 // fast指针每次前进两步，slow指针每次前进一步，若存在环，则迟早fast会绕圈追上slow；
 // 若无环，则fast会到达结尾null
class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode *slow = head, *fast = head;
        while(fast && fast->next) {
            fast = fast->next->next;
            slow = slow->next;
            if(fast == slow) return true;
        }
        return false;
    }
};