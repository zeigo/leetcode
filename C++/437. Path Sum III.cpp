/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
// 设以某节点p0为结尾可能的sum情况为sums，则以它的子节点p1为结尾
// 可能的sum为sums每个元素加p1->val和p1->val
class Solution {
  public:
    int pathSum(TreeNode *root, int sum) {
        vector<int> sums; 
        int cnt = 0;
        helper(sums, sum, cnt, root);
        return cnt;
    }

  private:
    void helper(vector<int> &sums, int sum, int &cnt, TreeNode *p) {
        if (!p) return;
        for_each(sums.begin(), sums.end(), [p](int &x) { x += p->val; });
        sums.push_back(p->val);
        cnt += count(sums.begin(), sums.end(), sum);
        helper(sums, sum, cnt, p->left);
        helper(sums, sum, cnt, p->right);
        sums.pop_back();
        for_each(sums.begin(), sums.end(), [p](int &x) { x -= p->val; });
    }
};