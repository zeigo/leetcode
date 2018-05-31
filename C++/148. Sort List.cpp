/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// merge-sort，采用bottom-up避免递归，空间o(1)
class Solution {
public:
    ListNode* sortList(ListNode* head) {
        if(!head || !(head->next)) return head;
        ListNode *cur = head, dummy(0);
        dummy.next = head;
        int len = 0;
        while(cur) { // 得到总长度
            len++;
            cur = cur->next;
        }
        for(int step = 1; step < len; step *= 2) {
            // 每段取step个，每两段合并一次，如果不是要求空间o(1)，用vector保存分段结果更好
            head = &dummy;
            cur = head->next;
            ListNode *l1, *l2;
            while(cur) {
                l1 = cur;
                l2 = cut(l1, step);
                cur = cut(l2, step);
                head = merge(l1, l2, head);
            }
        }
        return dummy.next;
    }
private:
    // 从head开始切掉n个，返回剩余部分的开头，不满n个时返回NULL
    ListNode *cut(ListNode *head, int n) {
        for(int i = 1; head && (i < n); i++) {
            head = head->next;
        }
        // 找到从head开始的第n个，不够时为NULL
        if(head) {
            ListNode *tmp = head->next;
            head->next = NULL;
            return tmp;
        } else {
            return NULL;
        }
    }
    // 有序链表l1,l2合并，连接到head之后，返回新head
    ListNode *merge(ListNode *l1, ListNode *l2, ListNode *head) {
        while(l1 && l2) {
            if(l1->val < l2->val) {
                head->next = l1;
                head = l1;
                l1 = l1->next;
            } else {
                head->next = l2;
                head = l2;
                l2 = l2->next;
            }
        }
        head->next = l1 ? l1 : l2;
        while(head->next) head = head->next;
        return head; 
    }
};