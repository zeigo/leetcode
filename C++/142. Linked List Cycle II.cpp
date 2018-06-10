/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// 快慢指针寻找环入口，快指针的步幅为慢指针两倍
// 当两者相遇时，从head再开始一个指针，与慢指针同步前进
// 相遇时既是环入口
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        ListNode *slow = head, *fast = head;
        while(fast && fast->next) {
            fast = fast->next->next;
            slow = slow->next;
            if(fast == slow) break;
        }
        if(!fast || !fast->next) return NULL;
        while(head != slow) {
            head = head->next;
            slow = slow->next;
        }
        return slow;        
    }
};